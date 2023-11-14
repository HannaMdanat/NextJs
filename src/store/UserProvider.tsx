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

export const UserContextProvider = ({ children }: { children: ReactNode }) => {
	const [cartData, setCartData] = useState<CartData[]>([]);

	const handleAddToCartData = (data: CartData) => {
		setCartData((prevState) => {
            const newData = [...prevState, data];
            localStorage.setItem('cart', JSON.stringify(newData));

            return newData
        });
	};

	const handleRemoveFromCartData = (id: string) => {
		setCartData((prevState) => {
            const newData = [...prevState.filter((item) => item.id !== id)];
            localStorage.setItem('cart', JSON.stringify(newData));

            return newData;
        });
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
