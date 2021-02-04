import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { specialsQuery } from '../queries/stat-queries';

import strength from '../../assets/images/special/Strength.jpeg';
import perception from '../../assets/images/special/Perception.jpeg';
import endurance from '../../assets/images/special/Endurance.jpeg';
import charisma from '../../assets/images/special/Charisma.jpeg';
import intelligence from '../../assets/images/special/Intelligence.jpeg';
import agility from '../../assets/images/special/Agility.jpeg';
import luck from '../../assets/images/special/Luck.jpeg';


export const useStatSpecial = () => {
    const [specialID, setSpecial] = useState<string>("5ffae58672fc0832c39f07a9")
    const { loading, error, data } = useQuery(specialsQuery);
    let specials;
    if (loading) specials = []
    if (data) specials = data.specials;

    let imgPath;
    switch (specialID) {
        case "5ffae58672fc0832c39f07a9":
            imgPath = strength;
            break;
        case "5ffae83972fc0832c39f07aa":
            imgPath = perception;
            break;
        case "5ffaeafa72fc0832c39f07ab":
            imgPath = endurance;
            break;
        case "5ffaec0e72fc0832c39f07ac":
            imgPath = charisma;
            break;
        case "5ffaf01272fc0832c39f07ae":
            imgPath = intelligence;
            break;
        case "5ffaf09472fc0832c39f07af":
            imgPath = agility;
            break;
        case "5ffaf13a72fc0832c39f07b0":
            imgPath = luck;
            break;
        default:
            imgPath = strength;
    }

    return {
        specialID,
        setSpecial,
        specials,
        imgPath
    };
};