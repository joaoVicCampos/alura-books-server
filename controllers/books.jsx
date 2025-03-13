const getBooks = (req, res) => {
    try {
        res.send('Olá Mundo do Brasil!')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const postBooks = (req, res) => {
    try {
        res.send('Você fez uma requisição do tipo POST')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const patchBooks = (req, res) => {
    try {
        res.send('Você fez uma requisição do tipo PATCH')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}

const deleteBooks = (req, res) => {
    try {
        res.send('Você fez uma requisição do tipo DELETE')
    } catch (error) {
        res.status(500)
        res.send(error.message)
    }
}







module.exports = {
    getBooks,
    postBooks,
    patchBooks,
    deleteBooks
}