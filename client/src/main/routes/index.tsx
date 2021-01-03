import React from 'react';
import { Route } from 'react-router-dom';


import Fanfics from '../../components/fanfics/fanfics';

export const Routes = () => {
    return (
        <div>
            <Route
                path='/data'
                render={() => <Fanfics />} />
        </div>
    )
}