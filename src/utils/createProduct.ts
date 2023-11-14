import { database } from '@/utils/firebase';
import { ref, set, get, push } from 'firebase/database';

const addProduct = async (productData: any) => {
  const productsRef = ref(database, 'products');

  try {
    // Add the product to the database
    const newProductRef = push(productsRef);
    await set(newProductRef, productData);

    // Retrieve the added product data
    const newProductSnapshot = await get(newProductRef);

    return { success: true, message: 'Product added successfully.', product: newProductSnapshot.val() };
  } catch (error) {
    console.error('Error adding product:', error);
    throw error;
  }
};

export { addProduct };
