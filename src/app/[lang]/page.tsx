import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import CategoryList from '@/components/CategoryList/CategoryList'
import SlideBanner from '@/components/SlideBanner/SlideBanner'
import { fetchCategoryData } from '@/utils/fetchCategoryDate'
import { getDictionary } from '../../../get-dictionary'

const Page = async ({ params }: { params: { lang: 'en' | 'ar' }}) => {
  const data = await fetchCategoryData();
  const dictionary = await getDictionary(params.lang);
  const { homePage } = dictionary;

  return (
    <div>
      <Header />
      <CategoryList categories={data!} dictionary={homePage.category}/>
      <SlideBanner categories={data!} dictionary={homePage.slide} />
      <Footer />
    </div>
  )
}

export default Page
