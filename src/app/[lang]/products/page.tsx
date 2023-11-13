import styles from './Products.module.scss'
import ProductList from '@/components/ProductsList/ProductsList'

const page = () => {
  return (
    <div>
        <p className={styles.productsSection}>Products</p>
        <ProductList/>
    </div>
  )
}

export default page
