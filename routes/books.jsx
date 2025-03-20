const { Router } = require('express')
const { getBooks,
    patchBookController,
    deleteBookController,
    postBooksController,
    getBook
} = require('../controllers/books.jsx')

router = Router()

router.get('/', getBooks)

router.get('/:id', getBook)

router.post('/', postBooksController)

router.patch('/:id', patchBookController)

router.delete('/:id', deleteBookController)


module.exports = router