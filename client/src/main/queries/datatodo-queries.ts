import { gql } from '@apollo/client';

export const datatodosQuery = gql`
    query datatodosQuery {
        datatodos {
            id
            name
        }
    }
`;