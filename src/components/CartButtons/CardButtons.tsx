import React from 'react'
import styles from './CardButtons.module.scss'
import { UserAuth } from '@/store/AuthContext'

interface CardButtonsProps {
    dictionary: {
      title: string
      cat: string
      section: string
      cart: string
      add: string
      remove: string
    };
}

const CardButtons = ({ dictionary }: CardButtonsProps) => {
  const { user } = UserAuth();

  return (
    <div className={styles.buttonsContainer}>
        {!user && (<h3 className={styles.cartDenied}>{dictionary.cart}</h3>)}
        {user && (<button className={styles.cartBtn}>{dictionary.add}</button>)}
        {user && (<button className={styles.cartBtn}>{dictionary.remove}</button>)}
    </div>
  )
}

export default CardButtons
