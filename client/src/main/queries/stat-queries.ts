import { gql } from '@apollo/client';

export const specialsQuery = gql`
    query specialsQuery {
        specials {
            id
            name
            desc
            value
        }
    }
`;

export const perksQuery = gql`
    query perksQuery {
        perks {
            id
            name
            desc
            level
        }
    }
`;