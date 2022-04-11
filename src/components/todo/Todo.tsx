import './Todo.scss'
import TodoForm from './TodoForm'
import TodoList from './TodoList'

const Todo = () => {
    return (
        <div className="todo">
            <TodoForm />
            <TodoList />
        </div>
    )
}

export default Todo
