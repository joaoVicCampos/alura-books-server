const fs = require('fs')

const getFavBooksService = () => {
    return JSON.parse(fs.readFileSync('favorites.json'))
}

const deleteFavBookService = (id) => {
    const favBooks = JSON.parse(fs.readFileSync('favorites.json'))
    const filtedFav = favBooks.filter((book) => book.id !== id)
    fs.writeFileSync('favorites.json', JSON.stringify(filtedFav))
}

const postFavBookService = (id) => {
    const books = JSON.parse(fs.readFileSync('books.json'))
    const favBooks = JSON.parse(fs.readFileSync('favorites.json'))

    const livroSelecionado = books.find((livro) => livro.id === id)
    const newFavBooks = [...favBooks, livroSelecionado]
    fs.writeFileSync('favorites.json', JSON.stringify(newFavBooks))
}

module.exports = {
    getFavBooksService,
    deleteFavBookService,
    postFavBookService
}