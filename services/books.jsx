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

const patchBookService = (uptades, id) => {
    let books = JSON.parse(fs.readFileSync('books.json'))
    const foundIndex = books.findIndex((book) => book.id === id)
    const uptadetBooks = { ...books[foundIndex], ...uptades }
    books[foundIndex] = uptadetBooks
    fs.writeFileSync('books.json', JSON.stringify(books))
}

const deleteBookService = () => {
    const books = JSON.parse(fs.readFileSync('books.json'))
    const filtedBooks = books.filter((book) => book.id !== id)
    fs.writeFileSync('books.json', JSON.stringify(filtedBooks))
}

module.exports = {
    getAllBooks,
    getBookById,
    postBooksService,
    patchBookService,
    deleteBookService
}