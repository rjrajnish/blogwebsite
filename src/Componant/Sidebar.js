import { Grid, Link, Paper, Typography } from '@mui/material'
import React from 'react'
 ;

export const Sidebar = (props) => {
     
  const { archives, description, social, title } = props;

  return (
    <Grid item xs={12} md={4}>
      <Paper elevation={0}  >
        <Typography variant="h6" gutterBottom>
          {title}
        </Typography>
        <Typography>{description}</Typography>
      </Paper>

      <Typography variant="h6" gutterBottom  >
        Archives
      </Typography>
      {archives.map((archive) => (
        <Link
          display="block"
          variant="body1"
          href={archive.url}
          key={archive.title}
        >
          {archive.title}
        </Link>
      ))}

      <Typography variant="h6" gutterBottom  >
        Social
      </Typography>
      {social.map((network) => (
        <Link display="block" variant="body1" href="#" key={network.name}>
          <Grid container direction="row" spacing={1} alignItems="center">
            <Grid item>
              <network.icon />
            </Grid>
            <Grid item>{network.name}</Grid>
          </Grid>
        </Link>
      ))}
    </Grid>
  );
}
