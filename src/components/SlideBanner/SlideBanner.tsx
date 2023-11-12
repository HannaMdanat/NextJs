'use client'

import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination } from 'swiper/modules';
import { Category } from '@/utils/fetchCategoryDate';
import styles from './SlideBanner.module.scss'
import Image from 'next/image'

interface List {
    id: number;
    name: string;
    image: '',
}

interface SlideBannerProps {
    categories: Category[];
    dictionary: { title: string };
}

const SlideBanner = ({ categories, dictionary }: SlideBannerProps) => {
    return (
        <>
            <p className={styles.slideTitle}>{dictionary.title}</p>
            <Swiper
                slidesPerView={3}
                spaceBetween={30}
                pagination={{
                clickable: true,
                }}
                modules={[Pagination]}
                className={styles.swiperPagination}
            >
                <div className={styles.categorySlide}>{categories?.map((category, index) => (
                    <SwiperSlide key={`slide-${index}`}>
                        <Image src={category.image} objectFit='cover' height='500' width='460' alt='Slider Image'/>
                    </SwiperSlide>
                ))}
                </div>
            </Swiper>
        </>
    );
}

export default SlideBanner
