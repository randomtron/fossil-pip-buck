import React from 'react';

import {Todo} from '../../../../main/types';

type PropsType = {
    todos: Array<Todo>,
    deleteTodo: (id: string) => void,
};


export const TodoList: React.FC<PropsType> = ({todos, deleteTodo}) => {
    const list: Array<Object> = todos.map((todo) => {
        return (
            <div key={todo.id}>
                <div>{todo.name}</div>
                <button onClick={() => deleteTodo(todo.id)}>delete</button>
            </div>
        )
    })
    return (
        <div>
            {list}
        </div>
    )
}

