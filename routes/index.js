'use strict'

const { Unauthorized } = require('../lib/errors')
const uploads = require('./upload')

module.exports = function(app) {

    app.use('/files', uploads(app))

    app.get('/', (req, res) => {
        res.render('home')
    })
    
    app.get('/crash', (req, res) => {
        throw new Unauthorized('crash')
    })

}