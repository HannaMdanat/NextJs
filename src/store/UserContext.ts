import { createContext, useContext } from 'react';
import { CartData } from './UserProvider';

interface userContextDefaultValues {
	cartData: CartData[],
	addToCartData: (data: CartData) => void,
	removeFromCartData: (id: string) => void,
};

const userContextDefaultValues: userContextDefaultValues = {
	cartData: [],
	addToCartData: () => {},
	removeFromCartData: () => {},
};

export const UserContext = createContext(userContextDefaultValues);

const useUser = () => useContext(UserContext);

export default useUser;
