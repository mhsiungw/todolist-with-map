import { AppDispatch } from '../state'
import { useDispatch } from 'react-redux'

export const useActions = () => useDispatch<AppDispatch>()

//need to be called inside component
// const useActions: AppDispatch = useDispatch()
