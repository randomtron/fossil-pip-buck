import React from 'react';

type PropsType = {
    locations: Array<any>,
    locationID: String
}
export const LocationsContent: React.FC<PropsType> = ({ locations, locationID }) => {
    let currentLocation = null;
    if (locations) {
        currentLocation = locations.find((e: any) => e.id === locationID)
    }
    return (
        <div className="content">
            {!currentLocation ?
                <div>Loading...</div> :
                <div>
                    <div>{currentLocation.desc}</div>
                </div>
            }

        </div>
    );
};