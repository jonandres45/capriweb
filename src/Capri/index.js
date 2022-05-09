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
                <Grid item xs={11} sm={7} md={4} alignSelf="center">                     
                        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:{xs:'center', md:'left'}}}>
                            Programa para los cálculos federales
                        </Typography>
                        <Typography variant="body2" color="text.white">
                            -ISR por Enajenación de bienes inmuebles <br/>
                            -ISR por Adquisición de bienes inmuebles <br/>
                            -Cálculo de recargos <br/>
                            -Avalúos Referidos <br/>
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" mt={5} sx={{textAlign:{xs:'center', md:'left'}}}>
                            Calculos estatales de
                        </Typography>
                        <Typography variant="body2" color="text.white">
                            -Arancel <br/>
                            -Derechos <br/>
                            -Isai <br/>
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" mt={5} sx={{textAlign:{xs:'center', md:'left'}}}>
                            Imprime los datos de los formatos federales
                        </Typography>
                        <Typography variant="body2" color="text.white">
                            -Forma 1A <br/>
                            -Anexos de la 1A <br/>
                            -Página 2 Bis <br/>
                        </Typography>
                        <Typography gutterBottom variant="h5" component="div" mt={5} sx={{textAlign:{xs:'center', md:'left'}}}>
                            Imprime los formatos completos de libre impresón
                        </Typography>
                        <Typography variant="body2" color="text.white">
                            -Anexo 5 de la forma fiscal 30 <br/>
                            -Constancia de Operaciones 37-C <br/>
                            -Forma de pago del 5% a la Entidad Federativa 15-C <br/>
                            -Forma de pago del 5% a la Entidad Federativa F-3 <br/>
                        </Typography>
                </Grid>
                <Grid item xs={8} md={5} alignSelf="center">                    
                        <Office/>
                </Grid>
                <Grid 
                    item 
                    xs={11} 
                    md={4} 
                    sx={{
                        mt:{xs:3, md:10}, 
                    }} 
                        alignSelf="center"
                >
                    <ScrollAnimation animateIn="fadeIn">
                        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:{xs:'center', md:'left'}}}>
                            Exporta e improtando al DeclaraNOT en línea
                        </Typography>
                        <Typography variant="body2" color="text.white">
                            Genere sus archivos TXT para importarlos al DeclaraNot en línea 2019 <br/>
                            Exporte ambos TXT (UIF y DeclaraNot) con un solo llenado <br/>
                            Obtenga a sus contribuyentes con su propia base de datos personalizada <br/>
                        </Typography>
                    </ScrollAnimation>
                </Grid>
                <Grid item xs={11} md={7} mt={10} alignSelf="center">
                    <ScrollAnimation 
                        animateIn='bounceInLeft'
                        animateOut='bounceOutLeft'
                    >
                        <video muted autoPlay loop className='image-video'>
                            <source src={txtDeclaranot} type="video/mp4"></source>
                        </video>
                    </ScrollAnimation>
                </Grid>
                <Grid item xs={11} md={7} mt={10} alignSelf="center">
                    <ScrollAnimation 
                        animateIn='bounceInUp'
                        animateOut='bounceOutUp'
                    >
                        <video muted autoPlay loop className='image-video'>
                            <source src={guiaCapri} type="video/mp4"></source>
                        </video>
                    </ScrollAnimation>
                </Grid>
                <Grid 
                    item 
                    xs={11} 
                    md={4} 
                    sx={{
                        mt:{xs:3, md:10}, 
                        
                        }
                    } 
                        alignSelf="center"
                        
                >
                    <ScrollAnimation animateIn="fadeIn">
                        <Typography gutterBottom variant="h5" component="div" sx={{textAlign:{xs:'center', md:'left'}}}>
                            Aprenda a leer y explicar un detalle de cálculo
                        </Typography>
                        <Typography variant="body2" color="text.white">
                            Capri I.S.R. cuenta con una función "Ayuda" la cual le <br/>
                            guiara paso a paso como se desarrollo su cálculo <br/>
                            Muestra los articulos utilizados paso a paso así como su procedimiento
                        </Typography>
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