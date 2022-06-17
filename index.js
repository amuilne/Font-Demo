const path = require('path')
const http = require('http')

const express = require('express')
// templating tools -> handlebars in express
const hbs = require('hbs')

const app = express()
const server = http.createServer(app)

const port = 3000

const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

app.route("/")
    .get(function (req, res, rext) {
        res.render('index', {
            title: "Font demo",
        })
    })

app.route("/inter")
    .get(function (req, res, rext) {
        res.render('comparrison', {
            title: "Inter",
            font: "Inter"
        })
    })

app.route("/nunito")
    .get(function (req, res, rext) {
        res.render('comparrison', {
            title: "Nunito",
            font: "Nunito"
        })
    })

app.route("/lato")
    .get(function (req, res, rext) {
        res.render('comparrison', {
            title: "Lato",
            font: "Lato"
        })
    })



app.use(express.static(__dirname))

server.listen(port, () => {
    console.log(`Let's go! The server is up on ${port}`)
})