import { gql } from '@apollo/client';

export const datatodosQuery = gql`
    query datatodosQuery {
        datatodos {
            id
            name
        }
    }
`;

export const addDatatodoMutation = gql`
    mutation addDatatodo($name: String) {
        addDatatodo(name: $name){
            name
        }
    }
`;