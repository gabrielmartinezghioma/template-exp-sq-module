import express from 'express'
import cors from 'cors'
import helmet from 'helmet'

const app = express()

app.use(express.json());
app.use(cors())
app.use(helmet({
  crossOriginResourcePolicy: false,
}));

app.get('/', (req, res) => {
  return res.send('<h1>Hello Word</h1>')
})

export default app