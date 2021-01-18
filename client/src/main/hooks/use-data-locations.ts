import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { locationsQuery } from '../queries/data-queries';

export const useDataLocations = () => {
    const [locationID, setLocation] = useState<string>("5ff7c5aacd144f5ae66c50cc")
    const { loading, error, data } = useQuery(locationsQuery);
    let locations;
    if (loading) locations = []
    if (data) locations = data.locations;
    return {
        locationID,
        setLocation,
        locations
    }
}