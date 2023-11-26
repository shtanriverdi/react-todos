import List from '@mui/material/List';
import TodoItem from './TodoItem.jsx';
import { useEffect, useState } from 'react';
import AddTodo from './AddTodo.jsx';
import Box from '@mui/material/Box';
import { comp, arraysEqual } from './utils.js';

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

    const makeUrgent = (id) => {
        setTodos(prevTodos => {
            const updatedTodos = prevTodos.map(todo => {
                if (todo.id === id) {
                    return { ...todo, priority: 3 };
                }
                return todo;
            });
            return updatedTodos;
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
            const updatedList = [{ ...newItem, id: crypto.randomUUID() }, ...prevTodos];
            updatedList.sort(comp);
            return updatedList;
        });
    }

    // Everytime todos state is changed, save to localstorage
    useEffect(() => {
        // Sort the todos
        const sortedTodos = [ ...todos ].sort(comp); // Updates the stated with sorted list
        // Avoid infinite re-render, render only if we really changed the todos array!
        if (!arraysEqual(sortedTodos, todos)) {
            setTodos(sortedTodos);
        }

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
                        onUrgent={() => makeUrgent(item.id)}
                    />
                )
            }
        </List>
    );
}
