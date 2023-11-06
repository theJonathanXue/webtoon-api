import express, { Request, Response } from 'express'
import dotenv from 'dotenv'
import connection from './config/dbConfig'
// TODO
// import genreRoutes from './routes/genreRoutes'
// import webtoonRoutes from './routes/webtoonRoutes'
// import webtoonGenreRoutes from './routes/webtoonGenreRoutes'

dotenv.config()

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(express.json())

// Routes
// app.use('/api/genres', genreRoutes)
// app.use('/api/webtoons', webtoonRoutes)
// app.use('/api/webtoon-genres', webtoonGenreRoutes)

// Error Handling Middleware
app.use((err: Error, req: Request, res: Response) => {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

// Start the Express server
connection
  .sync()
  .then(() => {
    console.log('Connection to the database has been established successfully.')
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`)
    })
  })
  .catch((error) => {
    console.error('Unable to connect to the database:', error)
  })
