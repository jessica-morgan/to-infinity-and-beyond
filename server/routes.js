const express = require('express')

const request = require('superagent')

const router = express.Router()

router.use(express.json())

const mercuryURL = 'https://mercuryretrogradeapi.com'

router.get('/mercury', (req, res) => {
    request
    .get(mercuryURL)
    .then(mercuryRes => {
        console.log(mercuryRes.body)
        res.json(mercuryRes.body)
    })
    .catch(err => {
        res.status(500).send('Failed')
        console.error(err)
    })
})

module.exports = router