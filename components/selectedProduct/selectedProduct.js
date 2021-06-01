import React, { useContext, useEffect } from 'react'
import { ProductsContext } from '../../contexts/productsContext'
import Link from 'next/link'
import AddProduct from '../purchase/addProduct'
function SelectedProduct({ products }) {
  const { addProduct } = useContext(ProductsContext)
  console.log('ikinci', addProduct)

  const clickHandle = () => {
    localStorage.setItem('dataCart', JSON.stringify(products))
  }

  return (
    <div>
      <Link href="/">
        <a onClick={clickHandle}>BackToStore</a>
      </Link>
      <div className="products">
        {products.map((product) => (
          <AddProduct
            key={product.id}
            title={product.title}
            text={product.text}
            src={product.src}
            price={product.price}
            id={product.id}
          />
        ))}
      </div>
    </div>
  )
}

export default SelectedProduct
