import React from 'react';
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client';

import { Header } from '../header/header';
import { Routes } from '../../main/routes';
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
                <Routes />
                <Footer />
            </div>
        </ApolloProvider>
    );
};