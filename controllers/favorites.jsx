const fs = require('fs')
const {
    getFavBooksService,
    deleteFavBookService,
    postFavBookService
} = require('../services/favorites.jsx')

const getAllFavBooks = (req, res) => {
    try {
        const favBooks = getFavBooksService()
        res.send(favBooks)
    } catch (error) {
        res.send(error.message)
        res.status(404)
    }
}

const deleteFavBookController = (req, res) => {
    try {
        const id = req.params.id
        deleteFavBookService(id)
        res.send('Livro apagado dos favoritos')
    } catch (error) {
        res.send(error.message)
        res.status(404)
    }
}

const postFavBookController = (req, res) => {
    try {
        const id = req.params.id
        postFavBookService(id)
        res.send('Livro adicionado ao favoritos')
    } catch (error) {
        res.send(error.message)
        res.status(404)
    }
}

module.exports = {
    getAllFavBooks,
    deleteFavBookController,
    postFavBookController
}