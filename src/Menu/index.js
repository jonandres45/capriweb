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
            route: '/'
        },
        {
            text: 'INPC',
            route: '/indices'
        },
        {
            text: 'UDIS',
            route:'/udis'
        },
        {
            text:'Tablas y tarifas I.S.R.',
            route:'/tablas'
        },
        {
            text:'UMA',
            route:'/uma'
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
                                navigate(item.route);
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