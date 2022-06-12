import { combineReducers } from 'redux'
import authors from './authors'
import books from './books'

const createRootReducer = () =>
  combineReducers({
    books: books,
    authors: authors,
  })

export default createRootReducer
