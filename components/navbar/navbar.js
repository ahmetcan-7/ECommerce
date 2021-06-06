import React, { useEffect, useState, useContext } from 'react'
import useStyles from './styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AppleIcon from '@material-ui/icons/Apple'
import Badge from '@material-ui/core/Badge'
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart'
import Link from 'next/link'
import { ProductsContext } from '../../contexts/productsContext'

export function sendProducts() {
  //ı am losing variables at context when the route of "/purchase" so ı created this funciton
  if (typeof Storage !== 'undefined') {
    const dataCart = JSON.parse(localStorage.getItem('dataCart'))
    return dataCart
  } else {
    return []
  }
}

function Navbar() {
  const { addProduct } = useContext(ProductsContext)
  const [basketCount, setBasketCount] = useState(0)
  useEffect(() => {
    let total = 0
    addProduct.map((product) => {
      total += product.count
    })

    setBasketCount(total)
  })

  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.color}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <AppleIcon fontSize="large" />
          </Typography>
          <Link href="/purchase" passHref>
            <IconButton
              aria-label="show 4 new mails"
              color="inherit"
              onClick={sendProducts}
            >
              <Badge badgeContent={basketCount} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default Navbar
