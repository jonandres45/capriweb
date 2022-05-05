import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import LinearProgress from '@mui/material/LinearProgress';
import axios from 'axios';
import {TablaAjuste} from './TablaAjuste';
import {Tarifas} from './Tarifas';
import {Recargos} from './Recargos';

function Tablas(){
    const [tablas, setTablas] = useState([]);
    const [tarifas, setTarifas] = useState([]);
    const [tasas, setTasas] = useState([]);

    useEffect(()=>{
        async function res(){
            const getTablas = await axios.get("http://localhost/backend/tablas.php");
            setTablas(getTablas.data);
            const getTarifas = await axios.get("http://localhost/backend/tarifas.php");
            setTarifas(getTarifas.data);
            const getRecargos = await axios.get("http://localhost/backend/tasas.php");
            setTasas(getRecargos.data);
        }
        res();
    }, []);

    return(
        <Box>
            {(tablas.length > 0 && tarifas.length > 0) ? (
                <Grid container justifyContent="center">
                    <Grid item xs={8} textAlign="center">
                        <TablaAjuste
                            tablas={tablas}
                        />
                    </Grid>
                    <Grid item xs={8} textAlign="center">
                        <Tarifas
                            tarifas={tarifas}
                        />
                    </Grid>
                    <Grid item xs={8} textAlign="center">
                        <Recargos
                            tasa={tasas}
                        />
                    </Grid>
                </Grid>
            ) : <LinearProgress/>}            
        </Box>
    );
}

export {Tablas};