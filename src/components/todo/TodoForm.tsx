import './TodoForm.scss'
import { v4 as uuidv4 } from 'uuid'
import { useActions } from '../../hooks/useActions'
import { useDispatch } from 'react-redux'
import { useState, useRef, useEffect } from 'react'
import { MapAPI } from '../map/MapAPI'
import { addTodo, Todo } from '../../state'

const TodoForm = () => {
    const initialState: Todo = {
        id: uuidv4(),
        todo: '',
        completed: false,
        address: '',
        position: [],
    }

    useEffect(() => {
        inputEl.current?.focus()
    }, [])

    const dispatch = useActions()
    // const dispatch2 = useDispatch()
    const inputEl = useRef<HTMLInputElement>(null)
    const [todo, setTodo] = useState<Todo>(initialState)

    const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        try {
            event.preventDefault()
            if (!todo.todo || !todo.address) return
            const [lat, lng] = await MapAPI.fetchLatLng(todo.address)
            todo.position = [lat, lng]
            dispatch(addTodo(todo))
            MapAPI.addMarker(todo)
            setTodo(initialState)
        } catch (err) {
            console.log(err)
        }
    }

    return (
        <form onSubmit={onSubmit} className="todo__form">
            <div className="todo__todo">
                <label htmlFor="todo">Todo</label>
                <input
                    value={todo.todo}
                    onChange={(e) => setTodo({ ...todo, todo: e.target.value })}
                    id="todo"
                    className="todo__input--todo"
                    ref={inputEl}
                />
            </div>
            <div className="todo__address">
                <label htmlFor="address">Address</label>
                <input
                    value={todo.address}
                    onChange={(e) => setTodo({ ...todo, address: e.target.value })}
                    id="address"
                    className="todo__
                    input--address"
                />
            </div>

            <button>Submit</button>
        </form>
    )
}

export default TodoForm
