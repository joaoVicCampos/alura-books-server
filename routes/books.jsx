const { Router } = require('express')
const { getBooks,
    patchBookController,
    deleteBooks,
    postBooksController,
    getBook
} = require('../controllers/books.jsx')

router = Router()

router.get('/', getBooks)

router.get('/:id', getBook)

router.post('/', postBooksController)

router.patch('/:id', patchBookController)

router.delete('/', deleteBooks)


module.exports = router