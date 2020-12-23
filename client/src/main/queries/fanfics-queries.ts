import { gql } from '@apollo/client';

export const fanficsQuery = gql`
    query fanficsQuery {
        fanfics {
            id
            name
            author
        }
    }
`;