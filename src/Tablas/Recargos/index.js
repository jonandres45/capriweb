import React from 'react';

function Recargos(props){
    const currentTime = new Date();
    return(
        <React.StrictMode>
            <h1>Tasa de recargos para el año {currentTime.getFullYear()} es de: {props.tasa.tasa} %</h1>
        </React.StrictMode>
    );
}

export {Recargos};