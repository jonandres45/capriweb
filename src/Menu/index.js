import React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
//import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import './Menu.css';

function Menu(){
    const btnMenu = [
        {
            text: 'Capri - ISR',
        },
        {
            text: 'INPC',
        },
        {
            text: 'UDIS',
        },
        {
            text:'Tablas y tarifas I.S.R.',
        },
        {
            text:'UMA',
        }
    ]
    return (
    <Box sx={{ flexGrow: 1 }}>
        <AppBar
            position='static'
            sx={{boxShadow: 0}}
            style={{background:'#213236'}}
        >
            <Toolbar>
            <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="menu"
                sx={{ mr: 2 }}
            >
                <MenuIcon />
            </IconButton>
            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }} justifyContent="center">
                {btnMenu.map((btn) => (
                <Button
                    variant="outlined"                    
                    color="info"
                    key={btn.text}
                    sx={{my: 2, color: 'white', display: 'block' }}
                    className="btnMenu"
                    size="large"
                >
                    {btn.text}
                </Button>
                ))}
            </Box>
            </Toolbar>
      </AppBar>
    </Box>
    );
}

export {Menu};