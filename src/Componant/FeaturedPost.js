import { Button, Card, CardActions, CardContent,  Typography } from '@mui/material'
import React from 'react'
import { makeStyles } from '@mui/styles'
import blog5 from '../images/blog5.jpg'
 
 

const useStyles=makeStyles({
    title:{
         
 
textTransform:'capitalize',
fontFamily:'Montserrat'

    },
    cover:{
        
         backgroundImage: `url(${blog5})`,
        backgroundPosition:"center",
           
         padding:"35px 25px"
    },
    btn:{
     position:'absolute',
     textAlign:'center',
    }

})

export const FeaturedPost = () => {

const classes=useStyles()
    return (
        <>
            <Card  className={classes.cover}>
                 <CardContent   >
      <Typography className={classes.title} sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
        Word of the Day
      </Typography>
      <Typography variant="h5" component="div"  gutterBottom >
        be nev o lent
      </Typography>
      <Typography sx={{ mb: 1.5 }} color="text.secondary">
        adjective
      </Typography>
      <Typography   variant="body2">
        well meaning and kindly.
        <br />
        {'"a benevolent smile"'}
      </Typography>
    </CardContent>
    <CardActions>
      <Button className={classes.btn}    size="small">Learn More</Button>
    </CardActions>
            </Card>

        </>
    )
}
