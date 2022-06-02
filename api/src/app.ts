// import lusca from 'lusca' will be used later
import dotenv from 'dotenv'
import express from 'express'
import apiContentType from './middlewares/apiContentType'
import apiErrorHandler from './middlewares/apiErrorHandler'
import authorRouter from './routers/author'
import bookRouter from './routers/book'
import loanRouter from './routers/loan'
import movieRouter from './routers/movie'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.set('port', process.env.PORT || 3000)

// Global middleware
app.use(apiContentType)
app.use(express.json())

// Set up routers
app.use('/api/v1/movies', movieRouter)
app.use('/api/v1/books', bookRouter)
app.use('/api/v1/authors', authorRouter)
app.use('/api/v1/loans', loanRouter)

// Custom API error handler
app.use(apiErrorHandler)

export default app
