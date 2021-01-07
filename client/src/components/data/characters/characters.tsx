import React from 'react';

import {useDataCharacters} from '../../../main/hooks/use-data-characters';
import {CharactersList} from './characters-list/characters-list';
import {CharactersContent} from './characters-content/characters-content';

import './characters.css';

export const Characters = () => {
    const { characterID, setCharacter, characters } = useDataCharacters();
    console.log(characters);
    return (
        <div className="main">
            <CharactersList 
                setCharacter={(id: string) => setCharacter(id)} 
                characters={characters}
                characterID={characterID}/>   
            <CharactersContent 
                characterID={characterID} 
                characters={characters}/>
        </div>
    );
};