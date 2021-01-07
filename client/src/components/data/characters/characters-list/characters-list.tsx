import React from 'react';

type PropsType = {
    characters: Array<any>,
    setCharacter: (id: string) => void
}

export const CharactersList: React.FC<PropsType> = ({ characters, setCharacter }) => {
    let currentCharacters = null
    if (characters) {
        currentCharacters = characters.map((e: any) =>
            <div className="section" key={e.id} onClick={() => setCharacter(e.id)}>
                <span>{e.name}</span>
            </div>)
    }

    return (
        <div>
            {currentCharacters}
        </div>
    );
};
