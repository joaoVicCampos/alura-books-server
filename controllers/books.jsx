const fs = require('fs')
const { getAllBooks, getBookById, postBooksService } = require('../services/books.jsx')



const getBooks = (req, res) => {
    try {
        const books = getAllBooks()
        res.send(books)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const getBook = (req, res) => {
    const id = req.params.id
    try {
        const book = getBookById(id)
        res.send(book)
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const postBooksController = (req, res) => {
    const newBook = req.body
    try {
        postBooksService(newBook)
        res.status(201)
        res.send('Livro adicionado com sucesso')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const patchBooks = (req, res) => {
    try {
        res.send('Você fez uma requisição do tipo PATCH')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const deleteBooks = (req, res) => {
    try {
        res.send('Você fez uma requisição do tipo DELETE')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}



module.exports = {
    getBooks,
    postBooksController,
    patchBooks,
    deleteBooks,
    getBook
}