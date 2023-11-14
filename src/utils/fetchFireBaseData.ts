import * as admin from 'firebase-admin'

if (!admin.apps.length) {
    admin.initializeApp({
      credential: admin.credential.cert({
        projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
        privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
      }),
      databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
    })
  }

  export const getAllProductData = async () => {
    const db = admin.database();
    const productsRef = db.ref('products');

    try {
      const dataSnapshot = await productsRef.once('value');
      const productData = dataSnapshot.val();

      if (!productData) {
        // If the data is empty
        return [];
      }

      // Convert the object into an array if needed
      const productArray = Object.values(productData);

      return productArray;
    } catch (error) {
      console.error('Error getting product data:', error);
      throw error; // You might want to handle this error in the calling code
    }
  };



// import { ref, query, onValue, limitToFirst, orderByChild, DataSnapshot, Query, startAfter } from 'firebase/database';
// import { database } from '@/utils/firebase'

// type FirebaseData = Record<string, any>;

// const processSnapshot = (snapshot: DataSnapshot) => {
//     const items: FirebaseData[] = [];
//     snapshot.forEach((childSnapshot) => {
//       items.push(childSnapshot.val());
//     });
//     return items;
//   };

//   const loadInitialData = (products: string) => {
//     const dataRef = ref(database, products);
//     const queryRef: Query = query(dataRef, orderByChild('id'));

//     onValue(queryRef, (snapshot) => {
//       const items = processSnapshot(snapshot);
//     }, (error) => {

//     });
//   };
