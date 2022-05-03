import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import umaImg  from '../assets/images/uma.jpg'
function Uma(){
    return (
        <Box 
            sx={{ flexGrow: 2 }}
            className="backgroundPresentation"
        >
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={6}>
                    <img src={umaImg} alt="uma"></img>
                </Grid>
            </Grid>
        </Box>

    );
}

export {Uma};

