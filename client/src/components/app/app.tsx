import React from 'react';


import { Header } from '../header/header';
import { Routes } from '../../main/routes';
import { Footer } from '../footer/footer';

import s from './app.module.css';

export const App = () => {
    return (
            <div className={s.appWrapper}>
                <Header />
                <Routes />
                <Footer />
            </div>
    );
};