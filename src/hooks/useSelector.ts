import { useSelector as _useSelector, TypedUseSelectorHook } from 'react-redux'
import { RootState } from '../state'

/**
 * set the type of this hook to RootState
 */
export const useSelector: TypedUseSelectorHook<RootState> = _useSelector
