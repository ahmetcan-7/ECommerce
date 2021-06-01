import React from 'react'
import SelectedProduct from '../components/selectedProduct/selectedProduct'

import ProductsContextProvider from '../contexts/productsContext'
import { sendProducts } from '../components/navbar/navbar'
import { Container } from '@material-ui/core'
function Purchase() {
  const products = sendProducts()

  return (
    <div>
      <ProductsContextProvider>
        <Container>
          <SelectedProduct products={products} />
        </Container>
      </ProductsContextProvider>
    </div>
  )
}

export default Purchase
