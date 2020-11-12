const express = require('express')
const router = express.Router()

//@desc Login/Landing page
//@route GET /

router.get('/', (req, res) => {
  res.send('Login')
})

//@desc Login/Dashboard
//@route GET /dashboard

router.get('/dashboard', (req, res) => {
  res.send('Dashboard')
})

module.exports = router