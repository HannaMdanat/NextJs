'use client';

import React from 'react';
import Image from 'next/image';
import styles from './CartCards.module.scss';
import { usePathname } from 'next/navigation';
import { useUser } from '@/store/UserContext';
import { CartData } from '@/store/UserProvider';

const CartCards = () => {
  const { cartData, removeFromCartData, clearCartData } = useUser()
  const pathname = usePathname();
  const lang = pathname.includes('/ar/') ? 'arabic' : 'english';

  return (
    <>
      <div className={styles.cart}>
          {!cartData.length && <h1>No Items In cart</h1>}
        {cartData.map((product: CartData, index) => (
            <div key={index} className={styles.card}>
              <button className={styles.remove} onClick={() => removeFromCartData(product.id!)}>X</button>
              <div className={styles.image}>
                <Image src={product.image!} height='220' width='220' alt='Cart' />
              </div>
              <p className={styles.name}>{product.name![lang]}</p>
              <p className={styles.info}>{product.info![lang]}</p>
              <p className={styles.price}>{product.price}</p>
            </div>
          ))}
      </div>
      {!!cartData.length && <button onClick={() => {clearCartData(); alert('Thank you for purchasing')}} className={styles.buyBtn}>Check Out</button>}
    </>

  )
}

export { CartCards }
