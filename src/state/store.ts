import { configureStore } from '@reduxjs/toolkit'
import todoReducer from './slices/todoSlices'

export const store = configureStore({ reducer: { todoReducer } })


/**
 * for custom hook : useSelector()
 * */
export type RootState = ReturnType<typeof store.getState>

/**
 * to ensure the returned type of dispatch function for thunk is
 * correct
 * */
export type AppDispatch = typeof store.dispatch
