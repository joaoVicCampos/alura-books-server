const { Router } = require('express')

const {
    getAllFavBooks,
    deleteFavBookController,
    postFavBookController
} = require('../controllers/favorites.jsx')

router = Router()

router.get('/', getAllFavBooks)
router.post('/:id', postFavBookController)
router.delete('/:id', deleteFavBookController)

module.exports = router