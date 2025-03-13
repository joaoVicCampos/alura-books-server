const { Router } = require('express')
const { getBooks, patchBooks, deleteBooks, postBooks } = require('../controllers/books.jsx')

router = Router()

router.get('/', getBooks)

router.post('/', postBooks)

router.patch('/', patchBooks)

router.delete('/', deleteBooks)


module.exports = router