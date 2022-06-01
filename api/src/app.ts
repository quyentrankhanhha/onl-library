// import lusca from 'lusca' will be used later
import dotenv from 'dotenv'
import express from 'express'
import apiContentType from './middlewares/apiContentType'
import apiErrorHandler from './middlewares/apiErrorHandler'
import bookRouter from './routers/book'
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

// Custom API error handler
app.use(apiErrorHandler)

export default app
