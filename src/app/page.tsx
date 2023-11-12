import Header from '@/components/Header/Header'
import Footer from '@/components/Footer/Footer'
import CategoryList from '@/components/CategoryList/CategoryList'
import SlideBanner from '@/components/SlideBanner/SlideBanner'
import { fetchCategoryData } from '../utils/fetchCategoryDate'

const App = async () => {
  const data = await fetchCategoryData();

  return (
    <div>
      <Header />
      <CategoryList categories={data!}/>
      <SlideBanner categories={data!}/>
      <Footer />
    </div>
  )
}

export default App
