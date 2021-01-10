import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { specialsQuery } from '../queries/stat-queries';

export const useStatSpecials = () => {
    const [specialID, setSpecial] = useState<string>("5ffae58672fc0832c39f07a9")
    const { loading, error, data } = useQuery(specialsQuery);
    let specials;
    if (loading) specials = []
    if (data) specials = data.specials;
    return {
        specialID,
        setSpecial,
        specials
    };
};