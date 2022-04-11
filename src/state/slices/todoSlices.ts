import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface Todo {
    id: string
    todo: string
    completed: boolean
    address: string
    position: number[]
}

export interface Todos {
    todos: Todo[]
}

export const initialState: Todos = {
    todos: [],
}

const todoSlices = createSlice({
    name: 'todoslice',
    initialState,
    reducers: {
        addTodo(state, action: PayloadAction<Todo>) {
            state.todos.push(action.payload)
        },
        deleteTodo(state, action: PayloadAction<string>) {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
    },
})

export const { addTodo, deleteTodo } = todoSlices.actions
export default todoSlices.reducer
