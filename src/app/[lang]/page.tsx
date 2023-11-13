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
      {/* <div className={styles.mapContainer}>
        <GoogleMap/> NEEDS KEY
      </div> */}
      <CategoryList categories={data!} dictionary={homePage.category}/>
      <SlideBanner categories={data!} dictionary={homePage.slide} />
    </div>
  )
}

export default Page
