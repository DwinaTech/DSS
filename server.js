const bodyParser = require('body-parser')
const express = require('express')
const logger = require('morgan')
const cors = require('cors')
const api = require('./api')

// Create express app
const app = express()

app.use(logger('dev'))
    .use(bodyParser.json())
    .use(bodyParser.urlencoded({ extended: false }))
    .use(cors());

app.use("/api", api)

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log("Server is up to running at port", port);
})

module.exports = app
