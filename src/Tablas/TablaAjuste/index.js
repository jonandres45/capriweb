import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function TablaAjuste(props){
    return(
        <React.StrictMode>
            <h1>Tabla para la actualización de las deducciones Regla 3.15.1</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell>Cuando el tiempo transcurrido sea:</TableCell>
                    <TableCell align="right">El factor correspondiente será</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.tablas.map((item)=>( 
                    <TableRow
                        key={item.id_tabla + item.valor}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >

                            {item.year === "1" ? (
                                <TableCell component="th" scope="row">
                                    Hasta 1 año
                                </TableCell>
                            ) : 
                            <TableCell component="th" scope="row">
                                Más de {item.year - 1} años hasta {item.year} años
                            </TableCell>
                            }                        
                        <TableCell align="right">{item.valor}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
        </React.StrictMode>
    );
}

export {TablaAjuste};