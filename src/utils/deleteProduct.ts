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
