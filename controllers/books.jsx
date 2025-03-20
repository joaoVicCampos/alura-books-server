const fs = require('fs')
const { getAllBooks,
    getBookById,
    postBooksService,
    patchBookService,
    deleteBookService
} = require('../services/books.jsx')



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
    try {
        const id = req.params.id
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

const patchBookController = (req, res) => {
    try {
        const id = req.params.id
        const body = req.body
        patchBookService(body, id)
        res.status(201)
        res.send('Livro alterado com sucesso')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const deleteBookController = (req, res) => {
    try {
        const id = req.params.id
        deleteBookService(id)
        res.send('Livro apagado com sucesso')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}



module.exports = {
    getBooks,
    postBooksController,
    patchBookController,
    deleteBookController,
    getBook
}