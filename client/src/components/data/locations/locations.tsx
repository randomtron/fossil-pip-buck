import React from 'react';

import {useDataLocations} from '../../../main/hooks/use-data-locations';
import {LocationsList} from './locations-list/locations-list';
import {LocationsContent} from './locations-content/locations-content';

export const Locations = () => {
    const { locationID, setLocation, locations } = useDataLocations();
    return (
        <div className="main">
            <LocationsList 
                setLocation={(id: string) => setLocation(id)} 
                locations={locations}
                locationID={locationID}/>   
            <LocationsContent 
                locationID={locationID} 
                locations={locations}/>
        </div>
    );
};