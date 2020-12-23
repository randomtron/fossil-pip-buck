import React from 'react';

import useTodoState from '../../../main/hooks/use-data-todo-state';
import {TodoList} from './todo-list/todo-list';
import {TodoForm} from './todo-form/todo-form';

export const DataList = () => {
    const { todos, addTodo, deleteTodo } = useTodoState([]);
    return (
        <div>
            <div>
                <TodoForm saveTodo={(savedText: string) => {
                    addTodo(savedText);
                }}/>
            </div>
            <div>
                <TodoList todos={todos} deleteTodo={deleteTodo}/>
            </div>
        </div>
    )
}