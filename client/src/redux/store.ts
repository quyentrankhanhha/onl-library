import { applyMiddleware, compose, createStore } from 'redux'
import thunk from 'redux-thunk'
import { AppState, UserType } from '../types'
import createRootReducer from './reducers'

export const getUserFromLocal = (): UserType | null => {
  const user = localStorage.getItem('user')
  if (user !== null) {
    return JSON.parse(user)
  } else {
    return null
  }
}

const initState: AppState = {
  books: {
    isLoading: false,
    error: '',
    bookList: [],
  },
  authors: {
    isLoading: false,
    error: '',
    authorList: [],
  },
  user: {
    isLoading: false,
    error: '',
    user: getUserFromLocal(),
  },
}

export default function makeStore(initialState = initState) {
  let composeEnhancers = compose

  if (process.env.NODE_ENV === 'development') {
    if ((window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) {
      composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    }
  }

  const store = createStore(
    createRootReducer(),
    initialState,
    composeEnhancers(applyMiddleware(thunk))
  )

  if ((module as any).hot) {
    ;(module as any).hot.accept('./reducers', () => {
      const nextReducer = require('./reducers').default
      store.replaceReducer(nextReducer)
    })
  }

  return store
}
