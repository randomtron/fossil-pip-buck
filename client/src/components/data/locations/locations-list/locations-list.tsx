import React from 'react';

type PropsType = {
    locations: Array<any>,
    setLocation: (id: string) => void,
    locationID: String,
}

export const LocationsList: React.FC<PropsType> = ({ locations, setLocation, locationID }) => {
    let currentLocations = null
    if (locations) {
        currentLocations = locations.map((e: any) =>
            <div 
                className={(e.id === locationID)? "sectionactive" : "section"} 
                key={e.id} 
                onClick={() => setLocation(e.id)}>
                <span>{e.name}</span>
            </div>)
    }

    return (
        <div className="list">
            {currentLocations}
        </div>
    );
};
