const { Router } = require('express')

router = Router()

router.get('/', (req, res) => {
    res.send('Olá Mundo!')
})

module.exports = router