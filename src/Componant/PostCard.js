 
import { Card, CardActionArea, CardContent, CardMedia, Grid, Hidden, Typography } from '@mui/material'
import { makeStyles } from '@mui/styles'
 
import React from 'react'

const useStyles=makeStyles({
    card:{
        display:'flex',
padding:'20px',
backgroundColor:'rgb(0,0,0,0.3)'
    },
    details:{
flex:1,
    },
    cardmedia:{
        width:160
    }
})

export const PostCard = ({post}) => {
const classes=useStyles()

    return (
        <Grid item xs={12} md={6}>
            <CardActionArea component='a' href="#"> 
                <Card className={classes.card} >
                     <div className={classes.details} >
                     <CardContent>
                         <Typography>{post.title}</Typography>
                         <Typography variant='subtitle1' >{post.date}</Typography>
                         <Typography variant='subtitle1' >{post.description}</Typography>
                         <Typography>Continue reading...</Typography>
                     </CardContent>
                    </div>
                    <Hidden xsDown>
                        <CardMedia 
                        className={classes.cardmedia}
                        image={post.image}
                        title={post.imageTitle}
                        />

                        
                    </Hidden>
                </Card>
            </CardActionArea>
        </Grid>
    )
}
