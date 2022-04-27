import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
//import Typography from '@mui/material/Typography';
import RestoreIcon from '@mui/icons-material/Restore';
import './Menu.css';

function Menu(){
    const [value, setValue] = React.useState(0);
    const btnMenu = [
        {
            text: 'Capri - ISR',
        },
        {
            text: 'INPC',
        },
        {
            text: 'UDIS',
        },
        {
            text:'Tablas y tarifas I.S.R.',
        },
        {
            text:'UMA',
        }
    ]
    return (
    <Box sx={{ flexGrow: 1 }}>
        <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue);
        }}
      >
          {btnMenu.map((item)=>(
              <BottomNavigationAction label={item.text} icon={<RestoreIcon />} />
          ))}
      </BottomNavigation>
    </Box>
    );
}

export {Menu};