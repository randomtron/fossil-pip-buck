import React from 'react';
import s from './header.module.css';

export const Header = () => {
    return (
        <header className={s.header}>
            <span>STATS </span>
            <span>INV </span>
            <span>DATA </span>
            <span>MAP </span>
            <span>RADIO </span>
        </header>
    );      
};