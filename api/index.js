const express = require('express')
const categories = require('./categories')
const articles = require('./articles')
const users = require('./users')

const router = express.Router()

router.use('/categories', categories)
    .use('/articles', articles)
    .use('/users', users)

module.exports = router
