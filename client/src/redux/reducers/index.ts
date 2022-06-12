import { combineReducers } from 'redux'
import books from './books'

const createRootReducer = () => combineReducers({ books: books })

export default createRootReducer
