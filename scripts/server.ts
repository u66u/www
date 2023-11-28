const express = require('express')
const next = require('next')

const dev = true
const HTTP_BIND = '0.0.0.0'
const HTTP_PORT = 80

const app = express()
const nextApp = next({ dev })
const nextHandler = nextApp.getRequestHandler()

nextApp.prepare().then(() => {
  // all frontend routes
  app.all('*', (req: any, res: any) => {
    return nextHandler(req, res)
  })

  // start server
  app.listen(HTTP_PORT, HTTP_BIND, () => {
    console.log(
      'Server running at ' +
        HTTP_BIND +
        ':' +
        HTTP_PORT +
        ' in ' +
        (dev ? 'development' : 'production') +
        ' mode'
    )
  })
})
