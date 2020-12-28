import React from 'react';

import {Todo} from '../../../../main/types';

type PropsType = {
    todos: Array<Todo>,
};


export const TodoList: React.FC<PropsType> = ({todos}) => {
    const list: Array<Object> = todos.map((todo) => {
        return (
            <div key={todo.id}>
                <div>{todo.name}</div>
            </div>
        )
    })
    return (
        <div>
            {list}
        </div>
    )
}

