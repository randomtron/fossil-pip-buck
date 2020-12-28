import { useQuery, useMutation } from '@apollo/client';

import {datatodosQuery, addDatatodoMutation} from '../queries/datatodo-queries'; 

interface Todo {
    id: any,
    name: string
};

export default () => {
    const { loading, error, data } = useQuery(datatodosQuery);
    const [addDatatodo] = useMutation(addDatatodoMutation);
    let datatodos: Array<Todo> = [];
    if (loading) datatodos = [];
    if (data) {
        datatodos = data.datatodos;
    };
    return {
        datatodos,
        addTodo: (todoText: string) => {
            addDatatodo({ 
                variables: { name: todoText },
                refetchQueries: [{ query: datatodosQuery }],
            })
        },
    };
};
