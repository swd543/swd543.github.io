import '@material-ui/core';
import { AppBar, Button, Card, CardActionArea, CardContent, CardMedia, createMuiTheme, ThemeProvider, Toolbar, Typography } from '@material-ui/core';
import '@material-ui/icons';
import { Email, Facebook, GitHub, LinkedIn, LocationOn } from '@material-ui/icons';
import React from 'react';
import './App.css';
import face from './img/me22.jpg';
function App() {

  const theme=createMuiTheme({   })

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <AppBar position='static' color='transparent'>
          <Toolbar className='NavLinksToolbar'>
            <Typography variant='h5' component='h1'>Swapneel Datta</Typography>
            <div style={{margin:'auto', display:'flex'}}>
              <Button>
                <Typography variant='subtitle1' color='textSecondary'>About me</Typography>
              </Button>
              <Button>
                <Typography variant='subtitle1' color='textSecondary'>Projects</Typography>
              </Button>
              <Button>
                <Typography variant='subtitle1' color='textSecondary'>Work experience</Typography>
              </Button>
            </div>
          </Toolbar>
        </AppBar>
        <Card style={{maxWidth:'280px', margin:'10px 10px'}}>
          <CardMedia image={face} style={{height:'200px'}}/>
          <CardContent>
            <Typography variant='h6'component='p'>
              Swapneel Datta
            </Typography>
            <Typography variant='body2' component='p'>
              Student at Deparment of Data Science and Knowledge Engineering.
            </Typography>
            <Typography variant='body2' component='ul'>
              <li>
                <LocationOn fontSize='inherit'/> Maastricht, Netherlands
              </li>
              <li>
                <Email fontSize='inherit'/> swd543@gmail.com
              </li>
              <li>
                <LinkedIn fontSize='inherit'/> LinkedIn
              </li>
              <li>
                <GitHub fontSize='inherit'/> GitHub
              </li>
              <li>
                <Facebook fontSize='inherit'/> Facebook
              </li>
            </Typography>
          </CardContent>
          <CardActionArea>
            
          </CardActionArea>
        </Card>
      </div>
    </ThemeProvider>
  );
}

export default App;
