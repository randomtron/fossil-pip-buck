import {useState} from 'react';

export default (initialState: Array<string>) => {
    const [todos, setTodos] = useState(initialState)
    return {
        todos,
        addTodo: (todoText: string) => {
            setTodos([...todos, todoText]);
        },
        deleteTodo: (todoIndex: number) => {
            const newTodos = todos.filter((_, index) => index !== todoIndex);
            setTodos(newTodos);
        },
    };
};
