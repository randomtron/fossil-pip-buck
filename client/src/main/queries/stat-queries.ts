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