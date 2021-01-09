import React from 'react';
import { Route } from 'react-router-dom';

import {Data} from '../../components/data/data';
import {Characters} from '../../components/data/characters/characters';
import {Locations} from '../../components/data/locations/locations';

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

export const SubNavRoutes = () => {
    return (
    <div>
        <Route exact path='/data' render={() => <Characters/>}/>
        <Route path='/data/locations' render={() => <Locations/>}/>
    </div>)
}