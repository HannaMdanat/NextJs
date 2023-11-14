import { useState, useEffect } from 'react';
import { ref, query, orderByChild, equalTo, get, Database, DataSnapshot } from 'firebase/database';
import { database } from '@/utils/firebase';

type FirebaseData = Record<string, any>[];

const useFirebaseDataByFieldValue = (node: string, field: string, value: any) => {
  const [data, setData] = useState<FirebaseData>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async (db: Database, nodePath: string, field: string, value: any) => {
      try {
        const dbRef = ref(db, nodePath);
        const dataQuery = query(dbRef, orderByChild(field), equalTo(value));
        const snapshot: DataSnapshot = await get(dataQuery);

        if (snapshot.exists()) {
          const fetchedData: FirebaseData = [];
          snapshot.forEach(childSnapshot => {
            fetchedData.push(childSnapshot.val());
          });
          setData(fetchedData);
        } else {
          setData([]);
        }
        setLoading(false);
      } catch (err) {
        if (err instanceof Error) {
          setError(err);
        }
        setLoading(false);
      }
    };

    fetchData(database, node, field, value);
  }, [node, field, value]);

  return { data, loading, error };
};

export default useFirebaseDataByFieldValue;
