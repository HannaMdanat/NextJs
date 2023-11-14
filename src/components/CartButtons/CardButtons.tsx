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
  const { addToCartData, removeFromCartData } = useUser();

  return (
    <div className={styles.buttonsContainer}>
        {!user && (<h3 className={styles.cartDenied}>{dictionary.cart}</h3>)}
        {user && (<button className={styles.cartBtn} onClick={() => addToCartData(data)}>{dictionary.add}</button>)}
        {user && (<button className={styles.cartBtn} onClick={() => removeFromCartData(data.id)}>{dictionary.remove}</button>)}
    </div>
  )
}

export default CardButtons
