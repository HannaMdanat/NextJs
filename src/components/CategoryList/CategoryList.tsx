"use client";

import Image from "next/image";
import styles from "./CategoryList.module.scss";
import { Link } from "@/components/Link";
import useGetCategories from "@/hooks/useGetCategories";

interface CategoryListProps {
  dictionary: { title: string };
}

const CategoryList = ({ dictionary }: CategoryListProps) => {
  const { categories } = useGetCategories();

  return (
    <>
      <p className={styles.categoryListTitle}>{dictionary.title}</p>
      <div className={styles.cardsContainer}>
        {categories?.map((category: any) => (
          <Link
            href='/products'
            className={styles.cardContent}
            key={category.id}
          >
            {category?.image && (
              <Image
                src={category?.image}
                className={styles.cardImage}
                width="100"
                height="100"
                alt="category image"
              />
            )}
            {category?.name.trim() && <p>{category.name}</p>}
          </Link>
        ))}
      </div>
    </>
  );
};

export default CategoryList;
