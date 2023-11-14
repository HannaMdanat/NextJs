import { useState, useCallback } from 'react';
import { ref, query, onValue, limitToFirst, orderByChild, DataSnapshot, Query, startAfter } from 'firebase/database';
import { database } from '@/utils/firebase'

type FirebaseData = Record<string, any>;

const useFirebasePagination = (node: string, pageSize: number) => {
  const [data, setData] = useState<FirebaseData[]>([]);
  const [lastKey, setLastKey] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<Error | null>(null);

  const processSnapshot = (snapshot: DataSnapshot) => {
    const items: FirebaseData[] = [];
    snapshot.forEach((childSnapshot) => {
      items.push(childSnapshot.val());
    });
    return items;
  };

  const loadInitialData = useCallback(() => {
    setLoading(true);
    const dataRef = ref(database, node);
    const queryRef: Query = query(dataRef, orderByChild('id'), limitToFirst(pageSize));

    onValue(queryRef, (snapshot) => {
      const items = processSnapshot(snapshot);
      setData(items);
      setLastKey(items.length > 0 ? items[items.length - 1]?.id : null);
      setLoading(false);
    }, (error) => {
      setError(error);
      setLoading(false);
    });
  }, [node, pageSize]);

  const loadNextPage = useCallback(() => {
    if (!lastKey || loading) return;
    setLoading(true);

    const dataRef = ref(database, node);
    const nextQueryRef: Query = query(dataRef, orderByChild('id'), startAfter(lastKey), limitToFirst(pageSize));

    onValue(nextQueryRef, (snapshot) => {
      const nextPageItems: FirebaseData[] = [];


      snapshot.forEach((childSnapshot) => {
        nextPageItems.push(childSnapshot.val());
      });

      if (nextPageItems.length > 0) {
        setData(prevData => [...prevData, ...nextPageItems]);
        setLastKey(nextPageItems[nextPageItems.length - 1].id);
      }

      setLoading(false);
    }, (error) => {
      setError(error);
      setLoading(false);
    });
  }, [node, pageSize, lastKey, loading]);

  return { data, loading, error, loadInitialData, loadNextPage };
};

export default useFirebasePagination;