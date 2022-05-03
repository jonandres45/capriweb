import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
//import Typography from '@mui/material/Typography';
import RestoreIcon from '@mui/icons-material/Restore';
import {Outlet, useNavigate} from 'react-router-dom';
import './Menu.css';

function Menu(){    
    let navigate = useNavigate();
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
        <React.StrictMode>
            <Box sx={{ flexGrow: 1 }}>
                <BottomNavigation
                showLabels
                value={value}
                onChange={(event, newValue) => {
                setValue(newValue);
                }}
            >
                {btnMenu.map((item)=>(
        //            <Link to="/indices" key={item.text}>
                        <BottomNavigationAction 
                            label={item.text}
                            key={item.text} 
                            icon={<RestoreIcon />}
                            onClick={()=>{                                
                                navigate("/indices");
                            }}
                        >
                        </BottomNavigationAction>
        //            </Link>
                ))}
                
            </BottomNavigation>      
            </Box>
            <Outlet/>
        </React.StrictMode>
    );
}

export {Menu};