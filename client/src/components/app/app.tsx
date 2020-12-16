import React from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';

import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { List } from '../list/list';
import { Content } from '../content/content'

import s from './app.module.css';

const client = new ApolloClient({
    uri: 'http://localhost:3005/graphql',
});

export const App = () => {
    return (
        <ApolloProvider client={client}>
            <div className={s.appWrapper}>
                <Header />
                <List />
                <Content />
                <Footer />
            </div>
        </ApolloProvider>
    );
};