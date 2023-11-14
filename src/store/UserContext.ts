import { createContext, useContext } from 'react';
import { CartData } from './UserProvider';

interface userContextDefaultValues {
	cartData: CartData[],
	addToCartData: (data: CartData) => void,
	removeFromCartData: (id: string) => void,
	clearCartData: () => void
};

const userContextDefaultValues: userContextDefaultValues = {
	cartData: [],
	addToCartData: () => {},
	clearCartData: () => {},
	removeFromCartData: () => {},
};

export const UserContext = createContext(userContextDefaultValues);

const useUser = () => useContext(UserContext);

export { useUser };
