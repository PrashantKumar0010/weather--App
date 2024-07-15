const express = require('express')
const path = require('path')
const app = express()
app.use(express.static('../public'));
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, '../views'))
app.get('/', (req, res) => {
    res.render('home')
})
app.get('/about', (req, res) => {
    res.render('about')
})
app.get('/weather', (req, res) => {
    res.render('weather')
})
app.get('*', (req, res) => {
    res.status(404).render('not-found')
})
app.listen(3000, (req, res) => {
    console.log('Server is running on port 3000')
})