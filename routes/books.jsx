const { Router } = require('express')
const { getBooks,
    patchBooks,
    deleteBooks,
    postBooksController,
    getBook
} = require('../controllers/books.jsx')

router = Router()

router.get('/', getBooks)

router.get('/:id', getBook)

router.post('/', postBooksController)

router.patch('/', patchBooks)

router.delete('/', deleteBooks)


module.exports = router