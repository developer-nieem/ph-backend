const express = require('express')
const app = express()
const cors = require('cors')
const port =  process.env.PORT ||  3000


app.use(cors())
app.use(express.json());

const users = [
    { id: 1, name: 'Sabana', email: 'sabana@gmail.com' },
    { id: 2, name: 'Sabnoon', email: 'sabnoon@gmail.com' },
    { id: 3, name: 'Sabila', email: 'sabila@gmail.com' },
]


app.get('/', (req, res) => {
  res.send('Hello World!')
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})