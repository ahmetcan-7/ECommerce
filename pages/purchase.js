import React from 'react'
import SelectedProduct from '../components/selectedProduct/selectedProduct'

import ProductsContextProvider from '../contexts/productsContext'
import { sendProducts } from '../components/navbar/navbar'
import { Container } from '@material-ui/core'
import NavbarSecondary from '../components/navbarSecondary/navbarSecondary'

function Purchase() {
  const products = sendProducts()

  return (
    <div>
      <ProductsContextProvider>
        <NavbarSecondary />
        <Container>
          <SelectedProduct products={products} />
        </Container>
      </ProductsContextProvider>
    </div>
  )
}

export default Purchase
