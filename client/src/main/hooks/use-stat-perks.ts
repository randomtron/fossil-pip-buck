import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { perksQuery } from '../queries/stat-queries';

export const useStatPerks = () => {
    const [perkID, setPerk] = useState<string>("5ffd4f084a07d179984e67ba")
    const { loading, error, data } = useQuery(perksQuery);
    let perks;
    if (loading) perks = []
    if (data) perks = data.perks;
    return {
        perkID,
        setPerk,
        perks
    };
};