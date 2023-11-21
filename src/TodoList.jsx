import List from '@mui/material/List';
import TodoItem from './TodoItem.jsx';
import { useEffect, useState } from 'react';
import AddTodo from './AddTodo.jsx';
import Box from '@mui/material/Box';

const getInitialData = () => {
    const initData = JSON.parse(localStorage.getItem("todos"));
    if (!initData) {
        return [];
    }
    return initData;
}

export default function TodoList() {
    const [todos, setTodos] = useState(getInitialData);

    const removeTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.filter(todo => {
                if (todo.id !== id) {
                    return todo;
                }
            })
        });
    }

    const toggleTodo = (id) => {
        setTodos(prevTodos => {
            return prevTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, done: !todo.done };
                } else {
                    return todo;
                }
            });
        });
    };


    const addTodo = (newItem) => {
        setTodos(prevTodos => {
            return [{ ...newItem, id: crypto.randomUUID() }, ...prevTodos]
        });
    }

    // Everytime todos state is changed, save to localstorage
    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    return (
        <List sx={{ width: '100%', maxWidth: 560 }}>
            <h1>Todo List!</h1>
            <Box sx={{ mb: 2 }}>
                <h3>Add New Todo:</h3>
                <AddTodo onAddItem={addTodo} />
            </Box>
            {
                todos.map(item =>
                    <TodoItem
                        key={item.id}
                        item={item}
                        onDelete={() => removeTodo(item.id)}
                        onToggle={() => toggleTodo(item.id)}
                    />
                )
            }
        </List>
    );
}
