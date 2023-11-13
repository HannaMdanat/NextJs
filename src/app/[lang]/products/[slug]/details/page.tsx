import React from 'react'
import ProductDetails from '@/components/ProductDetails/ProductDetails'
import { getDictionary } from '../../../../../../get-dictionary'


const Details = async  ({params}: {params: any}) => {
  const {slug} = params;
  const dictionary = await getDictionary(params.lang);
  const { homePage } = dictionary;

  return (
    <>
      <ProductDetails dictionary={homePage.direction} id={+slug} />
    </>
  )
}

export default Details