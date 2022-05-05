import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Tarifas(props){
    return(
        <React.StrictMode>
            <h1>Tarifa Aplicable a Pagos Provisionales Anexo 8 Regla 3.15.4</h1>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell align="right">Límite inferior</TableCell>
                    <TableCell align="right">Límite superior</TableCell>
                    <TableCell align="right">Cuota fija</TableCell>
                    <TableCell align="right">Porciento para aplicarse sobre el excedente del límite inferior</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.tarifas.map((item)=>( 
                    <TableRow
                        key={item.id_tarifas + item.limite_inferior}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align="right">
                            {item.limite_inferior}
                        </TableCell>
                        <TableCell align="right">
                            {item.limite_superior}
                        </TableCell>
                        <TableCell align="right">
                            {item.cuota_fija}
                        </TableCell>
                        <TableCell align="right">
                            {item.porcentaje} %
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
        </React.StrictMode>
    );
}

export {Tarifas};