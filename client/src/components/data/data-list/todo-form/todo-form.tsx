import React from 'react';
import useInputState from './useInputState';

type PropsType = {
    saveTodo: (text: string) => void
}

export const TodoForm: React.FC<PropsType> = ({ saveTodo }) => {
    const { value, reset, onChange } = useInputState();

    return (
        <div>
            <form onSubmit={event => {
                event.preventDefault();
                saveTodo(value);
                reset();
            }}>
                <textarea
                    onChange={onChange}
                    value={value}>
                </textarea>
                <button>add</button>
            </form>
        </div>
    )
}