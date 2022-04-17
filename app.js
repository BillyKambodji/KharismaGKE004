'use strict'

const express = require('express')

const PORT = 8000
const HOST = '0.0.0.0'

const app = express()
app.get('/', (req, res) => {
    res.send('Hi My Name is Audri Billy Kambodji with NIM 52019004 I From STMIK KHARISMA MAKASSAR in Major INFORMATIKA\n')
    
})

app.listen(PORT, HOST)
console.log(`Running on http://${HOST}:${PORT}`)
