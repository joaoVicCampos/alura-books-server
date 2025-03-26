const express = require('express')
const cors = require('cors')
const bookRoute = require('./routes/books.jsx')
const favoritesRoute = require('./routes/favorites.jsx')

const app = express()
app.use(express.json())

app.use(cors({ origin: "*" }))

const port = 8080

app.use('/books', bookRoute)
app.use('/favorites', favoritesRoute)


app.listen(port, () => {
    console.log(`Estou on na porta ${port}`);
})