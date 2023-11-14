import React from 'react'
import styles from './CardButtons.module.scss'
import { UserAuth } from '@/store/AuthContext'
import { useUser } from "@/store/UserContext";

interface CardButtonsProps {
    dictionary: {
      title: string
      cat: string
      section: string
      cart: string
      add: string
      remove: string
    };
    data: any;
}


// the logic can be seen in the local storage the data is being added and deleted

const CardButtons = ({ dictionary, data }: CardButtonsProps) => {
  const { user } = UserAuth();
  const { addToCartData, removeFromCartData, cartData } = useUser();
  const productAdded = cartData?.some(item => item.id === data.id);

  return (
    <div className={styles.buttonsContainer}>
        {!user && (<h3 className={styles.cartDenied}>{dictionary.cart}</h3>)}
        {user && !productAdded && (<button className={styles.cartBtn} onClick={() => addToCartData(data)}>{dictionary.add}</button>)}
        {user && productAdded && (<button className={styles.cartBtn} onClick={() => removeFromCartData(data.id)}>{dictionary.remove}</button>)}
    </div>
  )
}

export default CardButtons
