import React, { useContext } from 'react'
import CardProduct from '../cardProduct/cardProduct'
import { ProductsContext } from '../../contexts/productsContext'

function Products() {
  const { products } = useContext(ProductsContext)

  return (
    <div className="products">
      {products.map((product) => (
        <CardProduct
          key={product.id}
          title={product.title}
          text={product.text}
          src={product.src}
          price={product.price}
        />
      ))}
    </div>
  )
}

export default Products
