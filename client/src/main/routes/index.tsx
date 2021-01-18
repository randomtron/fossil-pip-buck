import React from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import { NoteForm } from '../../components/noteform/noteform';
import { WhiteList } from '../../components/whitelist/whitelist';

import s from './routes.module.css';

export const Routes = () => {
    return (
        <div className="main">
            <Switch>
                <Redirect exact from='/' to='/noteform' />
                <Route
                    path='/noteform'
                    render={() => <NoteForm />} />
                <Route
                    path='/whitelist'
                    render={() => <WhiteList />} />
            </Switch>
        </div>
    );
};
