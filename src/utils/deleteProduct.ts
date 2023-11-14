import { database } from '@/utils/firebase'
import { child, get, ref, remove } from "firebase/database";

const deleteProductById = async (productId: string) => {
const productsRef = ref(database, `products/${productId}`);

try {
    // Check if the product exists
    const productSnapshot = await get(productsRef);;

    if (!productSnapshot.exists()) {
    console.error('Product not found.');
    return { success: false, message: 'Product not found.' };
    }

    // Delete the product
    await remove(productsRef);

    return { success: true, message: 'Product deleted successfully.' };
} catch (error) {
    console.error('Error deleting product:', error);
    throw error;
}
};

export { deleteProductById };

  // if (!admin.apps.length) {
//     admin.initializeApp({
//       credential: admin.credential.cert({
//         projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//         clientEmail: process.env.FIREBASE_CLIENT_EMAIL,
//         privateKey: process.env.FIREBASE_PRIVATE_KEY?.replace(/\\n/g, '\n'),
//       }),
//       databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
//     })
//   }

// export const deleteProductById = async (productId: string) => {
//   const productsRef = ref(database, `products/${productId}`);

//   try {
//     // Check if the product exists
//     const productSnapshot = await productsRef.child(productId).once('value');
//     if (!productSnapshot.exists()) {
//       console.error('Product not found.');
//       return { success: false, message: 'Product not found.' };
//     }

//     // Delete the product
//     await productsRef.child(productId).remove();

//     return { success: true, message: 'Product deleted successfully.' };
//   } catch (error) {
//     console.error('Error deleting product:', error);
//     throw error;
//   }
// };