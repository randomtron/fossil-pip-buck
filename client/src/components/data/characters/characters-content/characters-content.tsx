import React from 'react';

type PropsType = {
    characters: Array<any>,
    characterID: String
}
export const CharactersContent: React.FC<PropsType> = ({ characters, characterID }) => {
    let currentCharacter = null;
    if (characters) {
        currentCharacter = characters.find((e: any) => e.id === characterID)
    }
    return (
        <div className="content">
            {!currentCharacter ?
                <div>Loading...</div> :
                <div>
                    <div>Name: {currentCharacter.name}</div>
                    <div>Gender: {currentCharacter.gender}</div>
                    <div>Race: {currentCharacter.race}</div>
                    <div>Description: {currentCharacter.desc}</div>
                </div>
            }

        </div>
    );
};