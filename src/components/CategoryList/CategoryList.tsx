import Image from 'next/image'
import styles from './CategoryList.module.scss'
import { Category } from '@/utils/fetchCategoryDate'

interface CategoryListProps {
    categories: Category[];
    dictionary: { title: string };
}

const CategoryList = async ({ categories, dictionary }: CategoryListProps) => {
    return (
        <>
            <p className={styles.categoryListTitle}>{dictionary.title}</p>
            <div className={styles.cardsContainer}>{categories?.map((category) => (
                <div className={styles.cardContent} key={category.id}>
                    {category?.image && <Image src={category?.image} className={styles.cardImage} width='100' height='100' alt='category image'/>}
                    {category?.name.trim() && <p>{category.name}</p>}
                </div>
            ))}</div>
        </>
    )
}

export default CategoryList