import exprss from 'express'

const app = exprss()

app.get('/', (req, res) => {
  res.send('<h1>Hello Word</h1>')
})

export default app