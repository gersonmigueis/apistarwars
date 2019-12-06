const express = require('express')
const users = express.Router()
const cors = require('cors')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')

const User = require('../models/User')
users.use(cors())

process.env.SECRET_KEY = 'secret'
//post para cadastrar usuario
users.post('/register', (req, res) => {
  const today = new Date()
  const userData = {
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
    created: today
  }

  User.findOne({
    where: {
      email: req.body.email
    }
  })
    
    .then(user => {
      if (!user) {
          //aqui faço a hash da passowrd cadastrada
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash
          User.create(userData)
            .then(user => {
              res.json({ status: user.email + 'Registrado.' })
            })
            .catch(err => {
              res.send('error: ' + err)
            })
        })
      } else {
        res.json({ error: 'Usuario existente.' })
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})
//fazendo login
users.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  })
    .then(user => {
      if (user) {
          //comparando a senha
        if (bcrypt.compareSync(req.body.password, user.password)) {
            //se for igual a digitada, gero o JWT
          let token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440
          })
          //token gerado
          res.send(token)
        }
      } else {
          //senao usuario nao existe
        res.status(400).json({ error: 'Usuario não existe' })
      }
    })
    .catch(err => {
      res.status(400).json({ error: err })
    })
})
//ja iniciando a sessao caso o jwt seja valido
users.get('/profile', (req, res) => {
  const decoded = jwt.verify(req.headers['authorization'], process.env.SECRET_KEY)

  User.findOne({
    where: {
      id: decoded.id
    }
  })
    .then(user => {
      if (user) {
        res.json(user)
      } else {
        res.send('Usuario não existe')
      }
    })
    .catch(err => {
      res.send('error: ' + err)
    })
})

module.exports = users