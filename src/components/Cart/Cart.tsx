'use client'

import React from 'react'
import Image from 'next/image'
import styles from './Cart.module.scss'
import { Link } from '@/components/Link'
import { useUser } from '@/store/UserContext';

export const Cart = () => {
  const { cartData } = useUser()

  return (
    <Link href='/cart'>
      <span className={styles.count}>{cartData.length}</span>
      <Image className={styles.cartImage} src='https://i.ibb.co/68yLThX/cart.png' height='35' width='60' alt='Cart'></Image>
    </Link>
  )
}
