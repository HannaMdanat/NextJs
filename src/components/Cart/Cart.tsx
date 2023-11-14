import React from 'react'
import Image from 'next/image'
import styles from './Cart.module.scss'

const Cart = () => {
  return (
    <Image className={styles.cartImage} src='https://i.ibb.co/68yLThX/cart.png' height='35' width='60' alt='Cart'></Image>
  )
}

export default Cart
