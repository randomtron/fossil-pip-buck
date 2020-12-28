import { useQuery, useMutation } from '@apollo/client';

import {
    datatodosQuery,
    addDatatodoMutation,
    deleteDatatodoMutation
} from '../queries/datatodo-queries';
import { Todo } from '../types';

export default () => {
    const { loading, error, data } = useQuery(datatodosQuery);
    const [addDatatodo] = useMutation(addDatatodoMutation);
    const [deleteDatatodo] = useMutation(deleteDatatodoMutation);
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
        deleteTodo: (todoID: string) => {
            deleteDatatodo({
                variables: { id: todoID}, 
                refetchQueries: [{ query: datatodosQuery }],
            })
        },
    };
};
