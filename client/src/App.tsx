import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Footer from './components/Footer/Footer'
import Navbar from './components/Navbar/Navbar'
import Protected from './components/Protected/Protected'
import ScrollUpButton from './components/ScrollUpButton/ScrollUpButton'
import AdminAuthorPage from './pages/AdminAuthorPage'
import AdminBookPage from './pages/AdminBookPage'
import AdminPage from './pages/AdminPage'
import AdminUserPage from './pages/AdminUserPage'
import AuthorListPage from './pages/AuthorListPage'
import AuthorPage from './pages/AuthorPage'
import BookListPage from './pages/BookListPage'
import BookPage from './pages/BookPage'
import HomePage from './pages/HomePage'
import Login from './pages/Login'

function App() {
  return (
    <>
      <Navbar />
      <Switch>
        <Route path={'/login'}>
          <Login />
        </Route>
        <Route path={'/admin/book'}>
          <Protected>
            <AdminBookPage />
          </Protected>
        </Route>
        <Route path={'/admin/author'}>
          <Protected>
            <AdminAuthorPage />
          </Protected>
        </Route>
        <Route path={'/admin/user'}>
          <Protected>
            <AdminUserPage />
          </Protected>
        </Route>
        <Route path={'/admin'}>
          <Protected>
            <AdminPage />
          </Protected>
        </Route>
        <Route path={'/book/:bookId'}>
          <BookPage />
        </Route>
        <Route path={'/book'}>
          <BookListPage />
        </Route>
        <Route path={'/author/:authorId'}>
          <AuthorPage />
        </Route>
        <Route path={'/author'}>
          <AuthorListPage />
        </Route>
        <Route path={'/'}>
          <HomePage />
        </Route>
      </Switch>
      <ScrollUpButton />
      <Footer />
    </>
  )
}

export default App
