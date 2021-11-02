
import './App.css';
import {  Container, Grid} from '@mui/material'
import { Header } from './Componant/Header';
import { ThemeProvider } from '@mui/private-theming';
 
import { FeaturedPost } from './Componant/FeaturedPost';
import { featuredPosts, sidebar } from './Data/Data';
import { PostCard } from './Componant/PostCard';
 
import { makeStyles } from '@mui/styles';
import { Main } from './Componant/Main';
import { Sidebar } from './Componant/Sidebar';
import { Footer } from './Componant/Footer';

 


function App() {



 
 

  return (




    <ThemeProvider    >
    <Container maxWidth='lg'>
     
         < Header />
         < FeaturedPost />
          <br />
          <Grid  container spacing={2}>
            {featuredPosts.map((post)=>(
              <PostCard  post={post} key={post.title} />
            ))}
          </Grid>
          <br />
          <Grid container spacing={5}   >
            <Main title='From the blog'/>
           
            <Sidebar title={sidebar.title}
            description={sidebar.description}
            archives={sidebar.archives}
            social={sidebar.social}

            />
          </Grid>
    </Container>
    < Footer
    title='Blog website'
    description='this is website to make material ui and react.' />
    </ThemeProvider>
  );
}

export default App;
