import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { Stat } from '../../components/stat/stat';
import { Inv } from '../../components/inv/inv';
import { Data } from '../../components/data/data';

import { Characters } from '../../components/data/characters/characters';
import { Locations } from '../../components/data/locations/locations';

import { Special } from '../../components/stat/special/special';
import { Perks } from '../../components/stat/perks/perks';

import s from './routes.module.css';

export const Routes = () => {
    return (
        <div className={s.routes}>
            <Switch>
                <Redirect exact from='/' to='/stat' />
                <Route
                    path='/stat'
                    render={() => <Stat />} />
                <Route
                    path='/inv'
                    render={() => <Inv />} />
                <Route
                    path='/data'
                    render={() => <Data />} />

            </Switch>
        </div>
    );
};

export const SubNavRoutes = () => {
    return (
        <div>
            <Route exact path='/data' render={() => <Characters />} />
            <Route path='/data/locations' render={() => <Locations />} />

            <Route path='/stat/special' render={() => <Special />} />
            <Route path='/stat/perks' render={() => <Perks />} />
        </div>);
};