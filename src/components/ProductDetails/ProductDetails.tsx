'use client'

import React from 'react';
import Head from 'next/head';
import useFirebaseDataByFieldValue from '@/hooks/useFetchById';
import styles from './ProductDetails.module.scss';
import Image from 'next/image';
import { usePathname } from 'next/navigation';

const ProductDetails = ({ id }: { id: number }) => {
  const { data } = useFirebaseDataByFieldValue('products', 'id', id);
  const pathname = usePathname();

  const title = data?.[0]?.name?.[pathname.includes('/en/') ? 'english' : 'arabic'] || 'Product Details';
  const description = data?.[0]?.info?.[pathname.includes('/en/') ? 'english' : 'arabic'] || 'Product details and information.';
  const imageUrl = data?.[0]?.image || '/default-image.jpg';

  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={imageUrl} />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={imageUrl} />
      </Head>

      <div>
        <p className={styles.productTitle}>Product Details</p>
        <div className={styles.productCard}>
          <Image className={styles.productImage} src={data?.[0]?.image} objectFit="cover" height="336" width="336" alt="Product Image" />
          <div className={styles.productDetails}>
            <h1 className={styles.productDetail}>{data?.[0]?.category?.[pathname.includes('/en/') ? 'english' : 'arabic']}</h1>
            <h2 className={styles.productDetail}>{data?.[0]?.name?.[pathname.includes('/en/') ? 'english' : 'arabic']}</h2>
            <h3 className={styles.productDetail}>{data?.[0]?.info?.[pathname.includes('/en/') ? 'english' : 'arabic']}</h3>
            <h3 className={styles.productDetail}>${data?.[0]?.price}</h3>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
