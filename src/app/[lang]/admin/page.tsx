import React from 'react'
import styles from './page.module.scss'
import { DeleteProduct } from '@/components/DeleteProduct'
import { getAllProductData } from '@/utils/fetchFireBaseData'
import { Link } from '@/components/Link';

const page = async ({ params }: { params: { lang: 'en' | 'ar' }}) => {
    const products = await getAllProductData();

  return (
    <>
        <Link className={styles.addBtn} href='/admin/product/create'>Add product</Link>
        {products.map((product: any, index) => (
            <div key={index} className={styles.adminContainer}>
                <h3 className={styles.adminProduct} key={index}>Product name: {product?.name[params.lang === 'en' ? 'english' : 'arabic']}</h3>
                <h4 className={styles.adminProduct} key={index}>Product info: {product?.info[params.lang === 'en' ? 'english' : 'arabic']}</h4>
                <h4 className={styles.adminProduct} key={index}>Price: ${product?.price}</h4>
                <div className={styles.buttonsContainer}>
                    <DeleteProduct productId={product?.id}/>
                </div>
            </div>
        ))}
    </>
  )
}

export default page
