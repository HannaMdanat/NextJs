import ProductList from '@/components/ProductsList/ProductsList'
import { getDictionary } from '../../../../get-dictionary'

const page = async ({ params }: { params: { lang: 'en' | 'ar' }}) => {
  const dictionary = await getDictionary(params.lang);
  const { homePage } = dictionary;

  return (
    <div>
        <ProductList dictionary={homePage.list}/>
    </div>
  )
}

export default page
