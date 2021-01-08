import { gql } from '@apollo/client';

export const charactersQuery = gql`
    query charactersQuery {
        characters {
            id
            name
            gender
            race
            desc
        }
    }
`;

export const locationsQuery = gql`
    query locationsQuery {
        locations {
            id
            name
            desc
        }
    }
`;