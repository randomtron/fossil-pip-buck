import React from 'react';
import {NavLink} from 'react-router-dom';

import s from './header.module.css';

export const Header = () => {
    return (
        <header className={s.header}>
            <NavLink to="/fanfics"><button>FANFICS </button></NavLink> 
            <NavLink to="/characters"><button>CHARACTERS </button></NavLink>
            <NavLink to="/data"><button>DATA </button></NavLink>
            <NavLink to="/map"><button>MAP </button></NavLink>
            <NavLink to="/radio"><button>RADIO </button></NavLink>
        </header>
    );      
};