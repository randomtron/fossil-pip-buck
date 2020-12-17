import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { Header } from '../header/header';
import { Fanfics } from '../fanfics/fanfics';
import { Footer } from '../footer/footer';

import s from './app.module.css';

const client = new ApolloClient({
    uri: 'http://localhost:3005/graphql',
});

export const App = () => {
    return (
        <ApolloProvider client={client}>
            <div className={s.appWrapper}>
                <Header />
                <Fanfics />
                <Footer />
            </div>
        </ApolloProvider>
    );
};