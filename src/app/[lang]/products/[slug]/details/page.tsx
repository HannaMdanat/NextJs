import React from 'react'
import ProductDetails from '@/components/ProductDetails/ProductDetails'
import Link from 'next/link'
import styles from './details.module.scss'

const Details = ({params}: {params: any}) => {
  const {slug} = params;
  return (
    <>
      <Link href='/products' className={styles.backTo}>Back</Link>
      <ProductDetails id={+slug} />
    </>
  )
}

export default Details