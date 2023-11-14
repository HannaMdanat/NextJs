import CategoryList from '@/components/CategoryList/CategoryList'
import SlideBanner from '@/components/SlideBanner/SlideBanner'
import { getDictionary } from '@/utils/get-dictionary';

const Page = async ({ params }: { params: { lang: 'en' | 'ar' }}) => {
  const dictionary = await getDictionary(params.lang);
  const { homePage } = dictionary;

  return (
    <div>
      {/* <div className={styles.mapContainer}>
        <GoogleMap/> NEEDS KEY
      </div> */}
      <CategoryList dictionary={homePage.category}/>
      <SlideBanner dictionary={homePage.slide} />
    </div>
  )
}

export default Page
