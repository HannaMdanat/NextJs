'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Category } from '@/utils/fetchCategoryDate';
import styles from './SlideBanner.module.scss'
import Image from 'next/image'
import Link from 'next/link'

interface SlideBannerProps {
    categories: Category[];
    dictionary: { title: string };
}

const SlideBanner = ({ categories, dictionary }: SlideBannerProps) => {
    return (
        <>
            <p className={styles.slideTitle}>{dictionary.title}</p>
            <Swiper
                slidesPerView={1}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className={styles.swiperPagination}
            >
                <div className={styles.categorySlide}>{categories?.map((category, index) => (
                    <SwiperSlide key={`slide-${index}`}>
                        <Link href='/products'>
                            <p className={styles.slideCategory}>{category.name}</p>
                            <Image className={styles.slideImage} src={category.image} objectFit='cover' fill sizes='100%' alt='Slider Image'/>
                        </Link>
                    </SwiperSlide>
                ))}
                </div>
            </Swiper>
        </>
    );
}

export default SlideBanner
