import { useEffect, useReducer } from "react"
import { todoReducer } from "./todoReducer"


const init = () => {
    return JSON.parse(localStorage.getItem('todos')) || []
}

export const useTodos = () => {    
    
 
    const [todos, dispatch] = useReducer(todoReducer, [], init)

    useEffect(() => {
      localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])
    


    const onNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatch(action)
    }

    const onDeleteTodo = (id) => {
        const action = {
            type: '[TODO] Remove Todo',
            payload: id,
        }
        dispatch(action)
    }
    const onToggleTodo = (id) => {
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id,
        }
        dispatch(action)
    }
    
    return{
        todos,
        todosCount: todos.length,
        pendingTodosCount: todos.filter(todo => !todo.done).length,
        onNewTodo,
        onDeleteTodo,
        onToggleTodo,
    }
}
