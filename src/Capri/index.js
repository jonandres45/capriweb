import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import './Capri.css';
function Capri(){
    return (
        <Box 
            sx={{ flexGrow: 2 }}
            className="backgroundPresentationCapri"
            pt={6}
        >
            <Grid container spacing={2} justifyContent="center">
                <Grid item xs={4} alignSelf="center">
                    <Typography gutterBottom variant="h5" component="div">
                        Programa para los cálculos federales
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        -ISR por Enajenación de bienes inmuebles <br/>
                        -ISR por Adquisición de bienes inmuebles <br/>
                        -Cálculo de recargos <br/>
                        -Avalúos Referidos <br/>
                    </Typography>                        
                </Grid>
                <Grid item xs={4} alignSelf="center">
                    <Typography gutterBottom variant="h5" component="div">
                        Calculos estatales de
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        -Arancel <br/>
                        -Derechos <br/>
                        -Isai <br/>
                    </Typography>                        
                </Grid>
                <Grid item xs={4} alignSelf="center">
                    <Typography gutterBottom variant="h5" component="div">
                        Imprime los datos de los formatos federales
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        -Forma 1A <br/>
                        -Anexos de la 1A <br/>
                        -Página 2 Bis <br/>
                    </Typography>                        
                </Grid>
                <Grid item xs={4} alignSelf="center">
                    <Typography gutterBottom variant="h5" component="div">
                        Exporta al DeclaraNOT en línea
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Genere sus archivos TXT para importarlos al DeclaraNot en línea 2019 <br/>
                        Exporte ambos TXT (UIF y DeclaraNot) con un solo llenado <br/>
                        Obtenga a sus contribuyentes con su propia base de datos personalizada <br/>
                    </Typography>                        
                </Grid>
                <Grid item xs={4} alignSelf="center">
                    <Typography gutterBottom variant="h5" component="div">
                        Aprenda a leer y explicar un detalle de cálculo
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        Capri I.S.R. cuenta con una función "Ayuda" la cual le <br/>
                        guiara paso a paso como se desarrollo su cálculo <br/>
                        Muestra los articulos utilizados paso a paso así como su procedimiento
                    </Typography>                        
                </Grid>
                <Grid item xs={4} alignSelf="center">
                    <Typography gutterBottom variant="h5" component="div">
                        Imprime los formatos completos de libre impresón
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                        -Anexo 5 de la forma fiscal 30 <br/>
                        -Constancia de Operaciones 37-C <br/>
                        -Forma de pago del 5% a la Entidad Federativa 15-C <br/>
                        -Forma de pago del 5% a la Entidad Federativa F-3 <br/>
                    </Typography>                        
                </Grid>
            </Grid>
        </Box>
    );
}

export {Capri};