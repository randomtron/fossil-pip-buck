import React from 'react';
import { Route } from 'react-router-dom';

import {Data} from '../../components/data/data';

import s from './routes.module.css';

export const Routes = () => {
    return (
        <div className={s.routes}>
            <Route
                path='/data'
                render={() => <Data />} />
        </div>
    )
}