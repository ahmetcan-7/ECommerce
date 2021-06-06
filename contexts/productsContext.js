import { createContext, useEffect, useState } from 'react'

import { sendProducts } from '../components/navbar/navbar'
export const ProductsContext = createContext()
function ProductsContextProvider(props) {
  const products = [
    {
      id: 1,
      title: 'MacBook',
      text: 'Uygulamalarda güçlü güncellemeler. Muhteşem yeni tasarım. Son teknoloji ürünü gizlilik ve güvenlik özellikleri. Bugüne kadarki en güçlü yazılımımız, en gelişmiş donanımımızda.',
      price: 19000,
      src: '/img1.jpg',
      count: 1
    },
    {
      id: 2,
      title: 'iPad',
      text: 'Uygulamalarda güçlü güncellemeler. Muhteşem yeni tasarım. Son teknoloji ürünü gizlilik ve güvenlik özellikleri. Bugüne kadarki en güçlü yazılımımız, en gelişmiş donanımımızda.',
      price: 9000,
      src: '/img2.webp',
      count: 1
    },
    {
      id: 3,
      title: 'iPhone',
      text: 'Uygulamalarda güçlü güncellemeler. Muhteşem yeni tasarım. Son teknoloji ürünü gizlilik ve güvenlik özellikleri. Bugüne kadarki en güçlü yazılımımız, en gelişmiş donanımımızda.',
      price: 13000,
      src: 'img3.jpg',
      count: 1
    },
    {
      id: 4,
      title: 'Apple Watch',
      text: 'Uygulamalarda güçlü güncellemeler. Muhteşem yeni tasarım. Son teknoloji ürünü gizlilik ve güvenlik özellikleri. Bugüne kadarki en güçlü yazılımımız, en gelişmiş donanımımızda.',
      price: 10000,
      src: 'img4.jpg',
      count: 1
    },
    {
      id: 5,
      title: 'HomePod',
      text: 'Uygulamalarda güçlü güncellemeler. Muhteşem yeni tasarım. Son teknoloji ürünü gizlilik ve güvenlik özellikleri. Bugüne kadarki en güçlü yazılımımız, en gelişmiş donanımımızda.',
      price: 11000,
      src: 'img5.png',
      count: 1
    },
    {
      id: 6,
      title: 'AirPods',
      text: 'Uygulamalarda güçlü güncellemeler. Muhteşem yeni tasarım. Son teknoloji ürünü gizlilik ve güvenlik özellikleri. Bugüne kadarki en güçlü yazılımımız, en gelişmiş donanımımızda.',
      price: 15000,
      src: 'img6.jpg',
      count: 1
    }
  ]

  let isItNull = []

  if (sendProducts() == null) {
    isItNull = []
  } else {
    isItNull = sendProducts()
  }

  const [addProduct, setAddProduct] = useState(isItNull)
  let total = 0

  const addCart = (id) => {
    const check = addProduct.every((item) => item.id !== id)

    if (check) {
      const data = products.filter((product) => {
        return product.id === id
      })
      setAddProduct([...addProduct, ...data])
    } else {
      alert('The product has been added to cart.')
    }
  }

  const increasePrice = async (id) => {
    let data = await JSON.parse(localStorage.getItem('dataCart'))
    data[id - 1].count += 1

    setAddProduct(data)
  }

  const decreasePrice = async (id) => {
    let data = await JSON.parse(localStorage.getItem('dataCart'))
    data[id - 1].count += -1

    setAddProduct(data)
  }

  useEffect(() => {
    localStorage.setItem('dataCart', JSON.stringify(addProduct))

    addProduct.map((product) => {
      total = total + product.price * product.count
    })

    console.log(total)

    localStorage.setItem('dataTotal', JSON.stringify(total))
  }, [addProduct])

  useEffect(() => {
    const dataCart = JSON.parse(localStorage.getItem('dataCart'))
    console.log('yeni data', dataCart)
    if (dataCart !== null) {
      setAddProduct(dataCart)
    }
  }, [])

  return (
    <ProductsContext.Provider
      value={{
        products,
        addProduct,
        addCart,
        increasePrice,
        decreasePrice,
        total
      }}
    >
      {props.children}
    </ProductsContext.Provider>
  )
}

export default ProductsContextProvider
