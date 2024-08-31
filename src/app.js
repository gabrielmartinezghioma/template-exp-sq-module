import exprss from 'express'

const app = exprss()
import cors from 'cors'

app.use(cors())

app.get('/', (req, res) => {
  res.send('<h1>Hello Word</h1>')
})

export default app