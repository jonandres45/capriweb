import React from 'react';
import mexico from '../assets/images/mexi.png'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Footer.css';
function Footer(){
    return(
        <Box sx={{ mt: 4}}>
            <Grid container spacing={2} justifyContent="center" textAlign="center">
                <Grid item xs={5}>
                    <img src={mexico} alt="México" className='mexico'></img>
                </Grid>
                <Grid item xs={5} alignSelf="center">
                    <p>Derechos Reservados © <br/>
                    Informática y Distribuidora Capricornio S.A. de C.V. 2004</p>
                </Grid>
                <Grid item xs={5} alignSelf="center">
                    <p>Aviso de privacidad</p>
                </Grid>
            </Grid>
        </Box>
    );
}

export {Footer};