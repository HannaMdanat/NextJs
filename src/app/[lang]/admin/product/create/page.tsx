import { getDictionary } from '@/utils/get-dictionary'
import { CreateProduct } from '@/components/CreateProduct';

const Page = async ({ params }: { params: { lang: 'en' | 'ar' }}) => {
  const dictionary = await getDictionary(params.lang);
  const { admin: { create } } = dictionary;

  return (
    <>
      <CreateProduct dictionary={create}/>
    </>
  )
}

export default Page
