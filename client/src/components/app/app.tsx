import React from 'react';


import { Header } from '../header/header';
import { Routes } from '../../main/routes';

import './app.scss';

export const App = () => {
    return (
            <div className="appWrapper">
                <Header />
                <Routes />
            </div>
    );
};