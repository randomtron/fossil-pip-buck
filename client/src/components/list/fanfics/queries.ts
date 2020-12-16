import {gql} from 'apollo-boost';

export const fanficsQuery = gql`
    query fanficsQuery {
        fanfics {
            id
            name
            author
        }
    }
`;