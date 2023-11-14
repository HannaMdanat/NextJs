'use client'

import React from 'react'
import { useRouter, usePathname } from 'next/navigation'
import styles from './DeleteProduct.module.scss'
import { deleteProductById } from '@/utils/deleteProduct'

const DeleteProduct = ({ productId }: { productId: string }) => {
    const pathname = usePathname();
    const router = useRouter();
  // Call this function whenever you want to
  // refresh props!
  const refreshData = () => {
    router.refresh();
  }
  return (
    <button onClick={ async () => {
         await deleteProductById(productId)
         refreshData()
        }} className={styles.cartBtn}>Delete Product</button>
  )
}

export { DeleteProduct }