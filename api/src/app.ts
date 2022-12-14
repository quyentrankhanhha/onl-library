import cors from 'cors'
// import lusca from 'lusca'
import dotenv from 'dotenv'
import express from 'express'
import passport from 'passport'
import apiContentType from './middlewares/apiContentType'
import apiErrorHandler from './middlewares/apiErrorHandler'
import loginWithGoogle from './passport/google'
import authorRouter from './routers/author'
import bookRouter from './routers/book'
import loanRouter from './routers/loan'
import loginRouter from './routers/login'
import userRouter from './routers/user'
import verifyRouter from './routers/verifyToken'

dotenv.config({ path: '.env' })
const app = express()

// Express configuration
app.set('port', process.env.PORT || 3000)

// Global middleware
app.use(apiContentType)
app.use(express.json())
app.use(cors())

app.use(passport.initialize())
passport.use(loginWithGoogle())

// Set up routers
app.use('/api/v1/books', bookRouter)
app.use('/api/v1/authors', authorRouter)
app.use('/api/v1/loans', loanRouter)
app.use('/api/v1/users', userRouter)
app.use('/login', loginRouter)
app.use('/verify-token', verifyRouter)

// Custom API error handler
app.use(apiErrorHandler)

export default app
