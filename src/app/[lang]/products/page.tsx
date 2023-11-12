import React from 'react'
import styles from './Products.module.scss'
import { fetchCategoryData } from '@/utils/fetchCategoryDate'
import Image from 'next/image'

const page = async () => {
  const categories = await fetchCategoryData();

  return (
    <div>
        <p className={styles.productsSection}>Products</p>
        <div className={styles.productsContainer}>{categories?.map((category) => (
                <div className={styles.productContent} key={category.id}>
                    <Image src={category?.image} width='100' height='100' alt='category image'/>
                    <p className={styles.productId}>Product ID: {category.id}</p>
                    {category?.name.trim() && <p className={styles.productName}>Category Title: {category.name}</p>}
                </div>
            ))}</div>
    </div>
  )
}

export default page
