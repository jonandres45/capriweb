import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import umaImg  from '../assets/images/uma.jpg'
import './Uma.css';

function Uma(){
    return (
        <Box 
            sx={{ flexGrow: 2 }}
        >
            <Grid container spacing={2} justifyContent="center">                
                <Grid item xs={12} md={6} textAlign="center">
                    <h1>
                        Uma
                    </h1>
                    <img src={umaImg} alt="uma" className='imgUma'></img>
                </Grid>
            </Grid>
        </Box>

    );
}

export {Uma};

