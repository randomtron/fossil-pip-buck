import React from 'react';
import {NavLink} from 'react-router-dom';

import s from './header.module.css';

export const Header = () => {
    return (
        <header className={s.header}>
            <NavLink to="/stats" className={s.section}><span>STATS</span></NavLink> 
            <NavLink to="/inv" className={s.section}><span>INV</span></NavLink>
            <NavLink to="/data" className={s.section}><span>DATA</span></NavLink>
            <NavLink to="/map" className={s.section}><span>MAP</span></NavLink>
            <NavLink to="/radio" className={s.section}><span>RADIO</span></NavLink>
        </header>
    );      
};