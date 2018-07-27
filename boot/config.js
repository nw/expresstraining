'use strict'

const path = require('path')
const morgan = require('morgan')
const compression = require('compression')
const responseTime = require('response-time')

module.exports = function config (app) {
  app.disable('x-powered-by')

  switch (app.get('env')) {
    case 'production':
      app
        .enable('prod')
        .enable('view cache')
        .disable('debug')
        .enable('compress')
        .use(morgan('common'))
      break
    default:
      app
        .enable('dev')
        .enable('debug')
        .disable('compress')
        .use(morgan('dev'))
      break
  }

  app
    .set('port', process.env.PORT || 3333)
    .set('root', path.join(__dirname, '/../'))
    // views
    .set('views', path.join(app.get('root'), 'views'))
    .set('view engine', 'pug')
    // global middleware
    .use(responseTime({ digits: 3 }));

 // if(app.enabled('compress')) app.use(compression())

//  .use(methodOverride('X-HTTP-Method-Override'))
//  .use(bodyParser.urlencoded({ extended: true })) // parse application/x-www-form-urlencoded
//  .use(bodyParser.json()) // parse application/json


  return app
}
