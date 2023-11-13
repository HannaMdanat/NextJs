import React from 'react'
import ProductDetails from '@/components/ProductDetails/ProductDetails'

const Details = ({params}: {params: any}) => {
  const {slug} = params;
  return (
    <ProductDetails id={+slug} />
  )
}

export default Details