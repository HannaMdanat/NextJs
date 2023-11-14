'use client'

import React, { useEffect, useCallback } from 'react'
import Image from 'next/image'
import useFirebasePagination from '@/hooks/useFirebasePagination'
import styles from './ProductsList.module.scss'
import {usePathname} from 'next/navigation'
import { Link } from "@/components/Link";
import CardButtons from '@/components/CartButtons/CardButtons'

interface ProductsListProps {
    dictionary: {
      title: string
      cat: string
      section: string
      cart: string
      add: string
      remove: string
    };
}

const ProductsList = ({ dictionary }: ProductsListProps) => {
    const pathname = usePathname()
    const { data, loading, loadInitialData, loadNextPage } = useFirebasePagination('products', 5);

  useEffect(() => {
    loadInitialData();
  }, [loadInitialData]);

  const checkScroll = useCallback(() => {
    const reachedBottom = window.innerHeight + window.scrollY >= document.body.offsetHeight;

    if (reachedBottom && !loading) {
      loadNextPage();
    }
  }, [loading, loadNextPage]);

  useEffect(() => {
    window.addEventListener('scroll', checkScroll);
    return () => window.removeEventListener('scroll', checkScroll);
  }, [checkScroll]);

  return (
    <div className={styles.productsContainer}>
        <p className={styles.productSection}>{dictionary.section}</p>
        {data?.map((category) => (
            <div className={styles.productContent} key={category?.id}>
                <Link className={styles.productsItems} href={`/products/${category.id}/details`}>
                    <Image src={category?.image} width='100' height='100' alt='category image'/>
                    <p className={styles.productCategory}>{dictionary.cat} {category?.category?.[pathname.includes('/en/') ? 'english' : 'arabic']}</p>
                    <p className={styles.productCategory}>{dictionary.title} {category?.name?.[pathname.includes('/en/') ? 'english' : 'arabic']}</p>
                </Link>
                <CardButtons dictionary={dictionary}/>
            </div>
        ))}
    </div>
  )
}

export default ProductsList