import './TodoList.scss'
import { ReactComponent as DeleteIcon } from './cross.svg'
import { deleteTodo } from '../../state'
import { MapAPI } from '../map/MapAPI'
import { useSelector } from '../../hooks/useSelector'
import { useActions } from '../../hooks/useActions'
import { useSelector as _useSelector } from 'react-redux'
import { RootState } from '../../state'

const TodoList = () => {
    const dispatch = useActions()
    const { todos } = useSelector(({ todoReducer }) => todoReducer)
    const { todos: _todos } = _useSelector(({ todoReducer }: RootState) => todoReducer)

    if (!todos) {
        return null
    }

    const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
        const todoItemId = (event.target as HTMLElement).closest('li')?.dataset.id
        if (!todoItemId) return
        dispatch(deleteTodo(todoItemId))
        MapAPI.deleteMarker(todoItemId)
    }

    const setCenter = (event: React.MouseEvent<HTMLLIElement>) => {
        if ((event.target as HTMLElement).closest('.btn--delete')) return

        const markerId: string = (event.target as HTMLElement).closest('li')?.dataset.id!
        if (!markerId) return
        MapAPI.setCenter(markerId)
    }

    return (
        <ul className="todo__list">
            {todos.map((todo, index) => (
                <li className="todo__item" onClick={setCenter} data-id={todo.id} key={todo.id}>
                    <div className="todo__desc">
                        <span>{todo.todo}</span>
                        <span>{todo.address}</span>
                    </div>
                    <button onClick={onClick} className="btn--delete">
                        <DeleteIcon />
                    </button>
                </li>
            ))}
        </ul>
    )
}

export default TodoList
