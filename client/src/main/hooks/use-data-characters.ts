import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { charactersQuery } from '../queries/data-queries';

export const useDataCharacters = () => {
    const [characterID, setCharacter] = useState<string>("5ff6d620de330875ee2ae10c")
    const { loading, error, data } = useQuery(charactersQuery);
    let characters;
    if (loading) characters = []
    if (data) characters = data.characters;
    return {
        characterID,
        setCharacter,
        characters
    }
}