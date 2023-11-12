import Image from 'next/image'
import styles from './CategoryList.module.scss'
import { Category } from '@/utils/fetchCategoryDate'
import Link from 'next/link'

interface CategoryListProps {
    categories: Category[];
    dictionary: { title: string };
}

const CategoryList = async ({ categories, dictionary }: CategoryListProps) => {
    return (
        <>
            <p className={styles.categoryListTitle}>{dictionary.title}</p>
            <div className={styles.cardsContainer}>{categories?.slice(0, 6).map((category) => (
                <Link href='/products' className={styles.cardContent} key={category.id}>
                    {category?.image && <Image src={category?.image} className={styles.cardImage} width='100' height='100' alt='category image'/>}
                    {category?.name.trim() && <p>{category.name}</p>}
                </Link>
            ))}</div>
        </>
    )
}

export default CategoryList