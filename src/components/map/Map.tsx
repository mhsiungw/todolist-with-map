import { useEffect } from 'react'
import { useSelector } from '../../hooks/useSelector'
import { MapAPI } from './MapAPI'
import './Map.scss'

const Map = () => {
    const { todos } = useSelector((state) => state.todoReducer)
    useEffect(() => {
        MapAPI.loadMap()
        if (todos.length > 0) {
            todos.forEach((todo) => MapAPI.addMarker(todo))
        }
    }, [todos])

    return <div id="map"></div>
}

export default Map
