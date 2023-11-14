'use client'

import React, { useRef } from "react";
import { useRouter, usePathname } from 'next/navigation';

import { Link } from '@/components/Link';
import { addProduct } from '@/utils/createProduct';

import styles from "./CreateProduct.module.scss";

export const CreateProduct = ({ dictionary }: any) => {
  const buttonRef = useRef<HTMLButtonElement>(null);
  const router = useRouter();
  const pathname = usePathname();
  const locale = pathname.includes('/ar/') ? 'ar' : 'en';

  const submitHandler = async (e: any) => {
    e.preventDefault();
    const { elements } = e.target;
    const {
      productAr,
      productEn,
      categoryAr,
      categoryEn,
      price,
      infoAr,
      infoEn,
    } = elements

    const data = {
      name: {
        english: productEn.value,
        arabic: productAr.value
      },
      price: price.value,
      category: {
        english: categoryEn.value,
        arabic: categoryAr.value
      },
      image: "https://via.placeholder.com/300x300",
      info: {
        english: infoEn.value,
        arabic: infoAr.value
      },
      id: Date.now(),
    }

    const results = await addProduct(data);
    router.push(`/${locale}/admin/`);
  }

  return (
    <form onSubmit={submitHandler} className={styles.form}>
      <Link href='/admin' ref={buttonRef}>{dictionary.back}</Link>
      <h1>{dictionary.title}</h1>
      <div className={styles.group}>
        <label htmlFor="">{dictionary.name}</label>
        <div className={styles.fields}>
          <input className={styles.input} name="productAr" type="text" placeholder={`${dictionary.name} (ar)`} />
          <input className={styles.input} name="productEn" type="text" placeholder={`${dictionary.name} (en)`}  />
        </div>
      </div>
      <div className={styles.group}>
        <label htmlFor="">{dictionary.category}</label>
        <div className={styles.fields}>
          <input className={styles.input} name="categoryAr" type="text" placeholder={`${dictionary.category} (en)`}  />
          <input className={styles.input} name="categoryEn" type="text" placeholder={`${dictionary.category} (ar)`}  />
        </div>
      </div>
      <div className={styles.group}>
        <label htmlFor="">{dictionary.price}</label>
        <input className={styles.input} name="price" type="text" placeholder={`${dictionary.price} (en)`}  />
      </div>
      <div className={styles.group}>
        <label htmlFor="">{dictionary.info}</label>
        <div className={styles.fields}>
          <input className={styles.input} name="infoAr" type="text" placeholder={`${dictionary.info} (en)`}  />
          <input className={styles.input} name="infoEn" type="text" placeholder={`${dictionary.info} (ar)`}  />
        </div>
      </div>
      <button className={styles.submit}>{dictionary.button}</button>
    </form>
  );
};
