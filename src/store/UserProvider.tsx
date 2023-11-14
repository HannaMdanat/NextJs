import React, { useEffect, useState, ReactNode } from 'react';

import { UserContext } from './UserContext';

export interface CartData {
    id?: string,
    name?: {
      english?: string,
      arabic?: string
    },
    price?: number,
    category?: {
      english?: string,
      arabic?: string
    },
    image?: string,
    info?: {
      english?: string,
      arabic?: string
    }
}

export default function UserProvider({ children }: { children: ReactNode }) {
	const [cartData, setCartData] = useState<CartData[]>([]);

	const handleAddToCartData = (data: CartData) => {
		setCartData([...cartData, data]);
		localStorage.setItem('cart', JSON.stringify([...cartData, data]));
	};

	const handleRemoveFromCartData = (id: string) => {
		setCartData((prevState) => [...prevState.filter((item) => item.id !== id)]);
	};

	useEffect(() => {
		const cartData = localStorage.getItem('cart');

		if (cartData) {
			setCartData(JSON.parse(cartData));
		}
	}, []);

	const value = {
		cartData,
		addToCartData: (data: CartData) => handleAddToCartData(data),
		removeFromCartData: (id: string) => handleRemoveFromCartData(id),
	};

	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
}
