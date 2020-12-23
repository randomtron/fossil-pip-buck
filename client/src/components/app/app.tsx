import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';
import { Route } from 'react-router-dom';

import { Header } from '../header/header';
import Fanfics from '../fanfics/fanfics';
import { DataList } from '../data/data-list/data-list';
import { Footer } from '../footer/footer';

import s from './app.module.css';

const client = new ApolloClient({
    uri: 'http://localhost:3005/graphql',
    cache: new InMemoryCache()
});

export const App = () => {
    return (
        <ApolloProvider client={client}>
            <div className={s.appWrapper}>
                <Header />
                <div>
                    <Route
                        path='/fanfics'
                        render={() => <Fanfics />} />
                    <Route
                        path='/data'
                        render={() => <DataList />} />
                </div>
                <Footer />
            </div>
        </ApolloProvider>
    );
};