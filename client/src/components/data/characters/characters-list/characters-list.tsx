import React from 'react';

type PropsType = {
    characters: Array<any>,
    setCharacter: (id: string) => void,
    characterID: String,
}

export const CharactersList: React.FC<PropsType> = ({ characters, setCharacter, characterID }) => {
    let currentCharacters = null
    if (characters) {
        currentCharacters = characters.map((e: any) =>
            <div 
                className={(e.id === characterID)? "sectionactive" : "section"} 
                key={e.id} 
                onClick={() => setCharacter(e.id)}>
                <span>{e.name}</span>
            </div>)
    }

    return (
        <div>
            {currentCharacters}
        </div>
    );
};
