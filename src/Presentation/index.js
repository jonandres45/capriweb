import React from "react";
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import './Presentation.css';
import logo from '../media/image/logo.png';
import PhoneIcon from '@mui/icons-material/Phone';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import Button from '@mui/material/Button';
import EmailIcon from '@mui/icons-material/Email';

function Presentation(){
    return (
        <Box 
            sx={{ flexGrow: 1 }}
            className="backgroundPresentation"
        >
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={5} alignSelf="center">
                    <h1>Cálculo para I.S.R. e impuestos federales
                    Preventa 2022</h1>
                    <p>
                        • Realice cálculos desde cualquier dispositivo
                    </p>
                    <p>
                        • Haga sus archivos TXT (enajenación, adquisición y UIF) sin necesidad de volver a llenar datos innecesarios
                    </p>
                    <p>
                        • Mantenga sus cálculos seguros en su propia nube personalizada
                    </p>
                </Grid>
                <Grid item xs={5}>
                    <img src={logo} alt="Logo" className="logo"></img>
                    <p style={{textAlign:'center'}}>Informática y distribuidora Capricornio S.A. de C.V.</p>
                    <p style={{textAlign:'center'}}>
                        <PhoneIcon/> (55) 57-87-40-17 <br/>
                        <Button variant="contained" color="success"><WhatsAppIcon/> +52 1 5526771838</Button> <br/>
                        <Button variant="contained" color="info"><EmailIcon/> isr@capri-isr.com</Button>
                    </p>
                </Grid>
            </Grid>
        </Box>
    );
}

export {Presentation};