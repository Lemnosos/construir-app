const express = require('express')
const route = express.Router()

const { getIndex, getApi, getLogin, postAuth } = require("../controllers/publicController")

//getIndex ""
route.get('/', getIndex)

//getIndex ""
route.get('/index', getIndex)

//getApi
route.get('/api', getApi)

//getLogin
route.get('/login', getLogin)

//postAuth
route.post('/auth', postAuth)


module.exports = route