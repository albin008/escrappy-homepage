import './App.css';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import logo from './Images/logo.png'
import escrappy_web from './Images/escrappy_web.mp4'
import escrappy_mob from './Images/escrappy_mob.mp4'

import { CONFIG } from "./Utility"
console.log(CONFIG)
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? 'Mobile'
    : /(tablet|ipad|playbook|silk)|(android(?!.*mobi))/i.test(
      navigator.userAgent
    )
      ? 'Tablet'
      : 'Desktop';


const btnhover = {
  backgroundColor: 'green !important',
  "&:hover": {
    background: 'green !important'
  }
}
const btncss = {
  backgroundColor: '#3c52b2',
  color: '#fff',
  '&:hover': {
    backgroundColor: '#fff !important',
    color: '#3c52b2 !important',
  },
}

const onAboutUsClick= () =>{
 window.open(CONFIG.aboutUs,'_self')
  // alert(CONFIG.aboutUs)
}

function App() {
  return (
    
      < Box sx={{ flexGrow: 1 }}>
        <AppBar 
        // position="static"
        className='appbar'
          sx={{ height: '0px' }}
        >
          <Toolbar
            sx={{ display: 'flex', justifyContent: 'space-between' }}
          >
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
            >
              <img src={logo} />
            </IconButton>
            <Box></Box>
            <Box m={2} pt={3} className={btnhover}>
              <Button className={btnhover} sx={{ p: '1em', fontWeight: 'bold', color: 'white' }} 
                onClick={() => {
                 onAboutUsClick()
                }}>About us</Button>

            </Box>
            <Box m={2} pt={3}>

              <Button sx={{ p: '1em', fontWeight: 'bold', color: 'white' }}
                onClick={() => {
                  alert('clicked');
                }}
               >contact us</Button>
            </Box>
            <Box></Box>

          </Toolbar>
        </AppBar>
        <>
      {detectDeviceType() === "Mobile" && <video className="background-video-mob" autoPlay loop muted>
        <source src={escrappy_mob} type='video/mp4' />
      </video>}

      {detectDeviceType() === "Desktop" && <video className="background-video-web" autoPlay loop muted  >
        <source src={escrappy_web} type='video/mp4' />
      </video>}

    </>

      </Box >
      
  );
}

export default App;
