import React from 'react'

import Card from '@material-ui/core/Card'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import CardActionArea from '@material-ui/core/CardActionArea'
import Rating from '@material-ui/lab/Rating'
import Box from '@material-ui/core/Box'
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import useStyles from './styles'
function AddProduct({ title, price, src, text, id }) {
  const classes = useStyles()

  return (
    <>
      <Card className={classes.root} style={{ margin: '0.5rem' }}>
        <CardActionArea>
          <CardContent>
            <CardMedia
              className={classes.media}
              component="img"
              alt="Contemplative Reptile"
              height="250"
              image={src}
              title={title}
            />
            <div style={{ display: 'flex' }}>
              <Typography
                gutterBottom
                variant="h5"
                component="h2"
                className={classes.text}
              >
                {title}
              </Typography>
              <Typography gutterBottom variant="h6" component="h2">
                {price}₺
              </Typography>
            </div>
            <Typography variant="body2" color="textSecondary" component="p">
              {text}
            </Typography>
          </CardContent>
        </CardActionArea>
        <CardActions>
          <Box
            component="fieldset"
            borderColor="transparent"
            className={classes.box}
          >
            <Rating name="read-only" value={4} readOnly />
          </Box>
          <Button size="small" color="primary">
            <AddShoppingCartIcon />
          </Button>
        </CardActions>
      </Card>
    </>
  )
}

export default AddProduct
