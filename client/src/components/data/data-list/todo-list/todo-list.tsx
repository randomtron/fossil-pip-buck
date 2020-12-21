import React from 'react';

type PropsType = {
    todos: Array<string>,
    deleteTodo: (index: number) => void,
};


export const TodoList: React.FC<PropsType> = ({todos, deleteTodo}) => {
    const list: Array<Object> = todos.map((todo, index) => {
        return (
            <div>
                <div>{todo}</div>
                <button onClick={() => deleteTodo(index)}>delete</button>
            </div>
        )
    })
    return (
        <div>
            {list}
        </div>
    )
}

