import React from 'react';
import {CharactersList} from './characters-list/characters-list';
import {CharactersContent} from './characters-content/characters-content';

import './characters.css';

export const Characters = () => {
    return (
        <div className="main">
            <CharactersList/>
            <CharactersContent/>
        </div>
    );
};