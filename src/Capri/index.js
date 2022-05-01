import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import {Office} from '../assets/animations/Office';
import txtDeclaranot from '../assets/videos/txtDeclaranot.mp4';
import guiaCapri from '../assets/videos/guiaCapri.mp4';
import {HojaPedido} from './HojaPedido';
import ScrollAnimation from 'react-animate-on-scroll';
import './Capri.css';

function Capri(){
    return (
        <Box 
            sx={{ flexGrow: 2 }}
            className="backgroundPresentationCapri"
            pt={6}
        >
            <Grid container justifyContent="space-evenly">
                <Grid item xs={4} alignSelf="center">
                    <ScrollAnimation 
                        animateIn='bounceInLeft'
                        animateOut='bounceOutLeft'
                      >                          
                        <Typography gutterBottom variant="h5" component="div">
                            Programa para los cálculos federales
                        </Typography>
                        <Typography variant="body2" color="text.white">
                            -ISR por Enajenación de bienes inmuebles <br/>
                            -ISR por Adquisición de bienes inmuebles <br/>
                            -Cálculo de recargos <br/>
                            -Avalúos Referidos <br/>
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" mt={5}>
                            Calculos estatales de
                        </Typography>
                        <Typography variant="body2" color="text.white">
                            -Arancel <br/>
                            -Derechos <br/>
                            -Isai <br/>
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" mt={5}>
                            Imprime los datos de los formatos federales
                        </Typography>
                        <Typography variant="body2" color="text.white">
                            -Forma 1A <br/>
                            -Anexos de la 1A <br/>
                            -Página 2 Bis <br/>
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" mt={5}>
                            Imprime los formatos completos de libre impresón
                        </Typography>
                        <Typography variant="body2" color="text.white">
                            -Anexo 5 de la forma fiscal 30 <br/>
                            -Constancia de Operaciones 37-C <br/>
                            -Forma de pago del 5% a la Entidad Federativa 15-C <br/>
                            -Forma de pago del 5% a la Entidad Federativa F-3 <br/>
                        </Typography>
                    </ScrollAnimation>
                </Grid>
                <Grid item xs={5} alignSelf="center">
                    <ScrollAnimation 
                        animateIn="fadeIn"
                    >    
                        <Office/>
                    </ScrollAnimation>
                </Grid>
                <Grid item xs={5} mt={18} alignSelf="center">
                    <ScrollAnimation 
                        animateIn='bounceInLeft'
                        animateOut='bounceOutLeft'
                    >
                        <video muted autoPlay loop className='image-video'>
                            <source src={txtDeclaranot} type="video/mp4"></source>
                        </video>
                    </ScrollAnimation>
                </Grid>
                <Grid item xs={4} mt={18} alignSelf="center">
                    <ScrollAnimation animateIn="fadeIn">
                        <Typography gutterBottom variant="h5" component="div">
                            Exporta e improtando al DeclaraNOT en línea
                        </Typography>
                        <Typography variant="body2" color="text.white">
                            Genere sus archivos TXT para importarlos al DeclaraNot en línea 2019 <br/>
                            Exporte ambos TXT (UIF y DeclaraNot) con un solo llenado <br/>
                            Obtenga a sus contribuyentes con su propia base de datos personalizada <br/>
                        </Typography>
                    </ScrollAnimation>
                </Grid>
                <Grid item xs={4} mt={18} alignSelf="center">
                    <ScrollAnimation animateIn="fadeIn">
                        <Typography gutterBottom variant="h5" component="div">
                            Aprenda a leer y explicar un detalle de cálculo
                        </Typography>
                        <Typography variant="body2" color="text.white">
                            Capri I.S.R. cuenta con una función "Ayuda" la cual le <br/>
                            guiara paso a paso como se desarrollo su cálculo <br/>
                            Muestra los articulos utilizados paso a paso así como su procedimiento
                        </Typography>
                    </ScrollAnimation>
                </Grid>
                <Grid item xs={5} mt={18} alignSelf="center">
                    <ScrollAnimation 
                        animateIn='bounceInUp'
                        animateOut='bounceOutUp'
                    >
                        <video muted autoPlay loop className='image-video'>
                            <source src={guiaCapri} type="video/mp4"></source>
                        </video>
                    </ScrollAnimation>
                </Grid>
                <Grid item xs={4} alignSelf="center">
                    
                </Grid>
            </Grid>
            <HojaPedido/>
        </Box>
        
    );
}

export {Capri};