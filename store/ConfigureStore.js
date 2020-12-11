import { createStore, applyMiddleware } from 'redux'
import { characterReducer } from './reducers/CharacterReducer'
import thunk from 'redux-thunk'

export const store = createStore(characterReducer, applyMiddleware(thunk))