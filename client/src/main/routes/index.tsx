import React from 'react';
import { Route } from 'react-router-dom';

import {Stat} from '../../components/stat/stat';
import {Data} from '../../components/data/data';

import {Characters} from '../../components/data/characters/characters';
import {Locations} from '../../components/data/locations/locations';

import {Specials} from '../../components/stat/specials/specials';

import s from './routes.module.css';

export const Routes = () => {
    return (
        <div className={s.routes}>
            <Route
                path='/stat'
                render={() => <Stat />} />
            <Route
                path='/data'
                render={() => <Data />} />
        </div>
    )
};

export const SubNavRoutes = () => {
    return (
    <div>
        <Route exact path='/data' render={() => <Characters/>}/>
        <Route path='/data/locations' render={() => <Locations/>}/>

        <Route path='/stat/special' render={() => <Specials/>}/>
    </div>)
};