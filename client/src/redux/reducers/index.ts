import { combineReducers } from 'redux'
import authors from './authors'
import books from './books'
import user from './user'

const createRootReducer = () =>
  combineReducers({
    books: books,
    authors: authors,
    user: user,
  })

export default createRootReducer
