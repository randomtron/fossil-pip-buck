import React from 'react';


import { Header } from '../header/header';
import { Routes } from '../../main/routes';
import { Footer } from '../footer/footer';

import './app.css';

export const App = () => {
    return (
            <div className="appWrapper">
                <Header />
                <Routes />
                <Footer />
            </div>
    );
};