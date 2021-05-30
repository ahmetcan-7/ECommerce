import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import '../components/products/products.css'
export default function MyApp({ Component, pageProps }) {
  return (
    <>
      {/* Meterial ui normalize.css */}
      <CssBaseline />
      <Component {...pageProps} />
    </>
  )
}
