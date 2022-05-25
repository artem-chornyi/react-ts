import React, { FC, useState, useEffect } from 'react';
import axios from 'axios';
import { ITodo } from '../types/types';
import TodoItem from './TodoItem';
import List from './List';

const TodoPage: FC = () => {
    const [todos, setTodos] = useState<ITodo[]>([]);

    useEffect(() => {
        fetchTodos();
    }, [])
    

    async function fetchTodos() {
        try {
            const response = await axios.get<ITodo[]>('https://jsonplaceholder.typicode.com/todos?_limit=10');
            setTodos(response.data)

        } catch (err) {
            alert(err)
        }
    }

    return (
        <List
            items={ todos }
            renderItem={(todo: ITodo) => <TodoItem todo={todo} key={todo.id} />}
        />
    )
}

export default TodoPage;