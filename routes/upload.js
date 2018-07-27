const path = require('path')
const multer = require('multer')
const router = require('express').Router()

module.exports = function uploadHandlers(app) {

    const upload = multer({ dest: path.join(app.get('root'), 'uploads/') })

    router.get('/', (req, res) => {
        res.render('form')
    })
    
    router.post('/upload', upload.single('file'), (req, res) => {
        res.render('output', {data: req.file})
    })

    return router

}

