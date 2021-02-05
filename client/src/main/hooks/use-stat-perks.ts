import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { perksQuery } from '../queries/stat-queries';

import hard_hack from '../../assets/images/perks/Hard hack.jpeg';
import chick_flight from '../../assets/images/perks/Chick flight.jpeg';
import a_mare_from_the_moon from '../../assets/images/perks/A mare from the moon.jpeg';
import damage_to_property from '../../assets/images/perks/Damage to property.jpeg';

export const useStatPerks = () => {
    const [perkID, setPerk] = useState<string>("5ffd4f084a07d179984e67ba")
    const { loading, error, data } = useQuery(perksQuery);
    let perks;
    if (loading) perks = []
    if (data) perks = data.perks;

    let imgPath;
    switch (perkID) {
        case "5ffd4f084a07d179984e67ba":
            imgPath = hard_hack;
            break;
        case "5ffd4faf4a07d179984e67bb":
            imgPath = chick_flight;
            break;
        case "5ffd50084a07d179984e67bc":
            imgPath = a_mare_from_the_moon;
            break;
        case "5ffd51554a07d179984e67bd":
            imgPath = damage_to_property;
            break;
        default:
            imgPath = hard_hack;
    }

    return {
        perkID,
        setPerk,
        perks,
        imgPath
    };
};