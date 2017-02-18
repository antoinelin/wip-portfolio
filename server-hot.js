/* eslint-disable */
const webpack = require('webpack')
const path    = require('path')
const express = require('express')
const config  = require('./webpack.config')

const app      = express()
const compiler = webpack(config)

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}))

app.use(require('webpack-hot-middleware')(compiler))

app.get('*', function (req, res) {
  res.sendFile(path.join(__dirname, 'hot.html'))
})

app.listen(config.server.port, 'localhost', function (err) {
  if(err) {
    console.log(err)
    return
  }
  console.log('Listening at http://localhost:' + config.server.port)
})
