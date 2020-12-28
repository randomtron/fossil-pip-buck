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

export const deleteDatatodoMutation = gql`
    mutation deleteDatatodo($id: ID) {
        deleteDatatodo(id: $id){
            name
        }
    }
`;