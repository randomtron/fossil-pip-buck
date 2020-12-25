import React from 'react';
import { Route } from 'react-router-dom';


import { DataList } from '../../components/data/data-list/data-list';
import Fanfics from '../../components/fanfics/fanfics';

export const Routes = () => {
    return (
        <div>
            <Route
                path='/fanfics'
                render={() => <Fanfics />} />
            <Route
                path='/data'
                render={() => <DataList />} />
        </div>
    )
}