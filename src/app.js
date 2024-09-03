import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import router from './routes/index.js'
import logger from 'morgan'

const app = express()

app.use(express.json())
app.use(express.json())
app.use(cors())
app.use(helmet({
  crossOriginResourcePolicy: false
}))
process.env.NODE_ENV === 'development' && app.use(logger('dev'))

app.use('/api/v1', router)

app.get('/', (req, res) => {
  return res.send(`
    <h1 style="text-align: center; font-family: Arial, sans-serif;">
      Welcome to Express with Sequelize
    </h1>
  `)
})

export default app
