import express from 'express'
import cors from 'cors'
import helmet from 'helmet'
import router from './routes/index.js';

const app = express()

app.use(express.json());
app.use(cors())
app.use(helmet({
  crossOriginResourcePolicy: false,
}));

app.use('/api/v1', router)

app.get('/', (req, res) => {
  return res.send(`<h1>aa</h1>`)
})

export default app