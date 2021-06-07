import React from 'react'
import useStyles from './styles'
import HomeIcon from '@material-ui/icons/Home'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import AppleIcon from '@material-ui/icons/Apple'
import Link from 'next/link'
function NavbarSecondary() {
  const classes = useStyles()
  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.color}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <AppleIcon fontSize="large" />
          </Typography>
          <Link href="/" passHref>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <HomeIcon />
            </IconButton>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default NavbarSecondary
