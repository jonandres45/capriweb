import React from 'react';
import Box from '@mui/material/Box';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import {Outlet, useNavigate} from 'react-router-dom';
import './Menu.css';
import DevicesIcon from '@mui/icons-material/Devices';
import ArticleIcon from '@mui/icons-material/Article';
import FormatListNumberedIcon from '@mui/icons-material/FormatListNumbered';
import TableChartIcon from '@mui/icons-material/TableChart';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function Menu(){    
    let navigate = useNavigate();
    const [value, setValue] = React.useState(0);
    const btnMenu = [
        {
            text: 'Capri - ISR',
            route: '/',
            icon:<DevicesIcon />,
        },
        {
            text: 'INPC',
            route: '/indices',
            icon:<ArticleIcon />,
        },
        {
            text: 'UDIS',
            route:'/udis',
            icon:<FormatListNumberedIcon />,
        },
        {
            text:'Tablas y tarifas I.S.R.',
            route:'/tablas',
            icon:<TableChartIcon />,
        },
        {
            text:'UMA',
            route:'/uma',
            icon:<AttachMoneyIcon />,
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
                            icon={item.icon}
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