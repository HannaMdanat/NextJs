'use client'

import React from 'react'
import useFirebaseDataByFieldValue from '@/hooks/useFetchById'
import styles from './ProductDetails.module.scss'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const ProductDetails = ({id}: {id: number}) => {
  const { data } = useFirebaseDataByFieldValue('products', 'id', id);
  const pathname = usePathname()
  console.log('data', data)

  return (
      <>
        <p className={styles.productTitle}>Product Details</p>
        <div className={styles.productCard}>
            <Image className={styles.productImage} src={data?.[0]?.image} objectFit='cover' height='336' width='336' alt='Product Image'></Image>
            <div className={styles.productDetails}>
                <p className={styles.productCategory}>{data?.[0]?.category?.[pathname.includes('/en/') ? 'english' : 'arabic']}</p>
                <p className={styles.productName}>{data?.[0]?.name?.[pathname.includes('/en/') ? 'english' : 'arabic']}</p>
                <p className={styles.productDetail}>{data?.[0]?.info?.[pathname.includes('/en/') ? 'english' : 'arabic']}</p>
                <p className={styles.productDetail}>${data?.[0]?.price}</p>

            </div>
        </div>
    </>

  )
}

export default ProductDetails