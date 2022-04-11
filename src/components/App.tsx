import Todo from './todo/Todo'
import Map from './map/Map'
import { store } from '../state'
import { Provider } from 'react-redux'
import './App.scss'

const App = () => {
    return (
        <Provider store={store}>
            <Todo />
            <Map />
        </Provider>
    )
}

export default App
