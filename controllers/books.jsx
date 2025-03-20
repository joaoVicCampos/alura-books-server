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
        if (books[0]) {
            res.send(books)
        } else {
            res.send('Não existe livro cadastrado')
        }
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const getBook = (req, res) => {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            const book = getBookById(id)
            res.send(book)
        } else {
            res.status(422)
            res.send("Id inválido")
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const postBooksController = (req, res) => {

    try {
        const newBook = req.body
        if (req.body.nome) {
            postBooksService(newBook)
            res.status(201)
            res.send('Livro adicionado com sucesso')
        } else {
            res.status(422)
            res.send('O campo nome é obrigatório')
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const patchBookController = (req, res) => {
    try {
        const id = req.params.id
        const body = req.body

        if (id && Number(id)) {
            patchBookService(body, id)
            res.status(201)
            res.send('Livro alterado com sucesso')
        } else {
            res.status(422)
            res.send('Id inválido')
        }

    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const deleteBookController = (req, res) => {
    try {
        const id = req.params.id
        if (id && Number(id)) {
            deleteBookService(id)
            res.send('Livro apagado com sucesso')
        } else {
            res.status(422)
            res.send('Id inválido')
        }

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