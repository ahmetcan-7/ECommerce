import Head from 'next/head'
import Products from '../components/products/products'
import ProductsContextProvider from '../contexts/productsContext'
import Container from '@material-ui/core/Container'
function HomePage() {
  return (
    <div>
      <Head>
        <title>E-Commerce </title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <ProductsContextProvider>
        <Container>
          <Products />
        </Container>
      </ProductsContextProvider>
    </div>
  )
}
export default HomePage
