import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import './HojaPedido.css';
import HojaPedidoPDF from '../../assets/files/HojaPedidoCapri-2022.pdf';
function HojaPedido(){
    return (        
            <Grid 
                id="hoja"
                container 
                spacing={2} 
                mt={18} 
                pt={10}
                pb={10}
                justifyContent="center" 
                textAlign="center"
                className="backgroundHojaPedido"
            >
                <Grid item xs={11} md={5}>
                    <Typography gutterBottom variant="h3" component="div">
                        Hoja de pedido Capri 2023
                    </Typography>
                    <Typography variant="body2" color="text.white" mb={4}>
                        Descargue y llene a mano o desde su computadora su hoja de pedido
                    </Typography> 
                    <Button 
                        variant="contained" 
                        size="large"
                        href={HojaPedidoPDF}
                    >
                        <PictureAsPdfIcon mr={2}/> Descargar
                    </Button>
                </Grid>
                <Grid item xs={11} md={8} alignSelf="center" sx={{textAlign:{xs:'left', md:'center'}}}>
                    <Typography color="text.white">
                        Con gusto nos ponemos a sus ordenes y le anunciamos que ya puede realizar la adquisición o renovación del programa C@PRI ISR 2023 con obsequio 2022
                    </Typography>
                    <Typography color="text.white">
                    Adquiera hoy mismo su sistema para ser de los primeros en recirbirlo y realice sus cálculos eficazmente desde los primeros días del año 2022.
                    </Typography>
                </Grid>
            </Grid>
    );
}

export {HojaPedido};