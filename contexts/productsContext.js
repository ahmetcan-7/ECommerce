import { createContext } from 'react'

export const ProductsContext = createContext()
function ProductsContextProvider(props) {
  const products = [
    {
      id: 1,
      title: 'MacBook',
      text: 'Uygulamalarda güçlü güncellemeler. Muhteşem yeni tasarım. Son teknoloji ürünü gizlilik ve güvenlik özellikleri. Bugüne kadarki en güçlü yazılımımız, en gelişmiş donanımımızda.',
      price: 19000,
      src: '/img1.jpg'
    },
    {
      id: 2,
      title: 'iPad',
      text: 'Uygulamalarda güçlü güncellemeler. Muhteşem yeni tasarım. Son teknoloji ürünü gizlilik ve güvenlik özellikleri. Bugüne kadarki en güçlü yazılımımız, en gelişmiş donanımımızda.',
      price: 9000,
      src: '/img2.webp'
    },
    {
      id: 3,
      title: 'iPhone',
      text: 'Uygulamalarda güçlü güncellemeler. Muhteşem yeni tasarım. Son teknoloji ürünü gizlilik ve güvenlik özellikleri. Bugüne kadarki en güçlü yazılımımız, en gelişmiş donanımımızda.',
      price: 13000,
      src: 'img3.jpg'
    },
    {
      id: 4,
      title: 'Apple Watch',
      text: 'Uygulamalarda güçlü güncellemeler. Muhteşem yeni tasarım. Son teknoloji ürünü gizlilik ve güvenlik özellikleri. Bugüne kadarki en güçlü yazılımımız, en gelişmiş donanımımızda.',
      price: 10000,
      src: 'img4.jpg'
    },
    {
      id: 5,
      title: 'HomePod',
      text: 'Uygulamalarda güçlü güncellemeler. Muhteşem yeni tasarım. Son teknoloji ürünü gizlilik ve güvenlik özellikleri. Bugüne kadarki en güçlü yazılımımız, en gelişmiş donanımımızda.',
      price: 11000,
      src: 'img5.png'
    },
    {
      id: 6,
      title: 'AirPods',
      text: 'Uygulamalarda güçlü güncellemeler. Muhteşem yeni tasarım. Son teknoloji ürünü gizlilik ve güvenlik özellikleri. Bugüne kadarki en güçlü yazılımımız, en gelişmiş donanımımızda.',
      price: 15000,
      src: 'img6.jpg'
    }
  ]
  return (
    <ProductsContext.Provider value={{ products }}>
      {props.children}
    </ProductsContext.Provider>
  )
}

export default ProductsContextProvider
