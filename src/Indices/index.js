import React, {useState, useEffect} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import './Indices.css';
import axios from 'axios';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function Indices(){
//    const [loading, setLoading] = useState(true);
    const [indices, setIndices] = useState([]);

    useEffect(()=>{
      async function res(){
        const peticion = await axios.get("http://localhost/backend/indices.php");
        setIndices(peticion.data);
      }
      res();
    }, [setIndices]);

    return (
        <div>          
            <Box p={1}>             
              {indices.length > 0 ? (
                 <Grid container justifyContent="center">
                 <Grid xs={11} item textAlign="center">
                   <h1>Índice Nacional de Precios al Consumidor 1969- 2022</h1>
                   <TableContainer component={Paper}>
                     <Table sx={{ minWidth: 650 }} aria-label="simple table">
                       <TableHead>
                         <TableRow>
                           <TableCell>Año</TableCell>
                           <TableCell align="right">enero</TableCell>
                           <TableCell align="right">febrero</TableCell>
                           <TableCell align="right">marzo</TableCell>
                           <TableCell align="right">abril</TableCell>
                           <TableCell align="right">mayo</TableCell>
                           <TableCell align="right">junio</TableCell>
                           <TableCell align="right">julio</TableCell>
                           <TableCell align="right">agosto</TableCell>
                           <TableCell align="right">septiembre</TableCell>
                           <TableCell align="right">octubre</TableCell>
                           <TableCell align="right">noviembre</TableCell>
                           <TableCell align="right">diciembre</TableCell>
                         </TableRow>
                       </TableHead>
                       <TableBody>
                         {indices.map((item)=>(                  
                           <TableRow
                             key={item.id_indices + item.ene}
                             sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                           >
                             <TableCell component="th" scope="row">
                               {item.year}
                             </TableCell>
                             <TableCell align="right">{item.ene}</TableCell>
                             <TableCell align="right">{item.feb}</TableCell>
                             <TableCell align="right">{item.mar}</TableCell>
                             <TableCell align="right">{item.abr}</TableCell>
                             <TableCell align="right">{item.may}</TableCell>
                             <TableCell align="right">{item.jun}</TableCell>
                             <TableCell align="right">{item.jul}</TableCell>
                             <TableCell align="right">{item.ago}</TableCell>
                             <TableCell align="right">{item.sep}</TableCell>
                             <TableCell align="right">{item.oct}</TableCell>
                             <TableCell align="right">{item.nov}</TableCell>
                             <TableCell align="right">{item.dic}</TableCell>
                             </TableRow>
                         ))}
                       </TableBody>
                     </Table>
                   </TableContainer>
                 </Grid>
               </Grid>                
              ) : <LinearProgress/>}
                
            </Box>
        </div>
    );
}

export {Indices};