import React from 'react';
import './Whatsapp.css';
import whats from '../assets/images/whatsApp.png';
function Whatsapp(){
    return (
        <a href='https://wa.me/5215526771838'>
            <img
                src={whats}
                alt='whatsapp'
                className='logoFlotanteWhatsapp'
            />
        </a>
    );
}

export {Whatsapp};