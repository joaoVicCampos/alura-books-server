const fs = require('fs')


const getAllBooks = () => {
    return JSON.parse(fs.readFileSync('books.json'))
}

const getBookById = (id) => {
    const books = JSON.parse(fs.readFileSync('books.json'))
    const filterBook = books.filter((book) => book.id === id)
    return filterBook
}

const postBooksService = (newBook) => {
    const books = JSON.parse(fs.readFileSync('books.json'))
    const newDataBooks = [...books, newBook]
    fs.writeFileSync('books.json', JSON.stringify(newDataBooks))
}

module.exports = {
    getAllBooks,
    getBookById,
    postBooksService
}