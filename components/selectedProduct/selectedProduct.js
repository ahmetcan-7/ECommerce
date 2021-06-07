import React, { useEffect, useState } from 'react'
import Link from 'next/link'
import AddProduct from '../purchase/addProduct'
import Subtotal from '../subtotal/subtotal'
function SelectedProduct({ products }) {
  let [total, setTotal] = useState(0)

  const totalPrice = () => {
    if (typeof Storage !== 'undefined') {
      setTimeout(() => {
        setTotal(JSON.parse(localStorage.getItem('dataTotal')))
      }, 1)
    }
  }

  useEffect(() => {
    totalPrice()
  }, [])

  return (
    <div>
      <div className="products">
        {products.map((product) => (
          <AddProduct
            key={product.id}
            title={product.title}
            text={product.text}
            src={product.src}
            price={product.price}
            id={product.id}
            totalPrice={totalPrice}
            firstCount={product.count}
          />
        ))}
      </div>
      <Subtotal subtotal={total} />
    </div>
  )
}

export default SelectedProduct
