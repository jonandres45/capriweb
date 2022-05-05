import React, {useEffect, useState} from 'react';
import axios from 'axios';
import LinearProgress from '@mui/material/LinearProgress';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Udis(){
    const [udis, setUdis] = useState([]);
    useEffect(()=>{
        async function res(){
            const peticion = await axios.get("http://localhost/backend/udis.php");
            setUdis(peticion.data);
        }
        res();
    }, [setUdis]);
    return(
        <Box>
            {udis.length > 0 ? (
                <Grid container justifyContent="center">
                    <Grid item xs={11} md={4} textAlign="center">
                        <h1>Udis más recientes</h1>
                        <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 400 }} aria-label="simple table">
                        <TableHead>
                            <TableRow>
                            <TableCell>Fecha</TableCell>
                            <TableCell align="right">UDI</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {udis.map((item)=>(                  
                            <TableRow
                                key={item.id + item.udi}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                    <TableCell component="th" scope="row">
                                    {item.fecha}
                                    </TableCell>
                                    <TableCell align="right">{item.udi}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                        </Table>
                    </TableContainer>                    
                    </Grid>
                </Grid>
            ) : <LinearProgress/>}
        </Box>
    );
}

export {Udis};