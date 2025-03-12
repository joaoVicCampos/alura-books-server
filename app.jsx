const express = require('express')
const bookRoute = require('./routes/books.jsx')

const app = express()

const port = 8000

app.use('/books', bookRoute)

app.listen(port, () => {
    console.log(`Estou on na pora ${8000}`);
})