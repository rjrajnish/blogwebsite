import { Badge, Divider, IconButton,  Toolbar, Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles';
import MenuIcon from '@mui/icons-material/Menu';
import NotificationsIcon from '@mui/icons-material/Notifications';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import SideDrawer from './SideDrawer';
 

const useStyles= makeStyles((theme)=>({
    title:{
        flexGrow:1,
    },
    tagline:{
        fontSize:20,
        textTransform:'uppercase',
        justifyContent:'center',
        fontFamily:'Montserrat'
    }
}))

export const Header = () => {

const classes=useStyles()

    return (
        <>
          <Toolbar>
              <SideDrawer >
              <IconButton color='inherit'>
                  <MenuIcon />
              </IconButton>
              </SideDrawer>
              <Typography variant='h5' className={classes.title}>Blog Website</Typography>
              <IconButton color='inherit'>
                  <Badge badgeContent={4} color='error'>
                        <NotificationsIcon />
                  </Badge>
                  
              </IconButton>
              <IconButton color='inherit'>
                  <AccountCircleIcon />
              </IconButton>
        </Toolbar>  
          <Divider />
        <Toolbar className={classes.tagline} >this is my blo websitte</Toolbar>
        </>
    )
}
