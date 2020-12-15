import React from 'react';

import { Footer } from '../footer/footer';
import { Header } from '../header/header';
import { List } from '../list/list';
import { Content } from '../content/content'

import s from './app.module.css';

export const App = () => {
    return (
        <div className={s.appWrapper}>
            <Header />
            <List />
            <Content />
            <Footer />
        </div>
    )
}