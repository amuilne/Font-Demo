const path = require('path')
const http = require('http')
const process = require('process')

const express = require('express')
// templating tools -> handlebars in express
const hbs = require('hbs')

const app = express()
const server = http.createServer(app)

let port = 3000

const viewsPath = path.join(__dirname, './templates/views')
const partialsPath = path.join(__dirname, './templates/partials')

// Process the command line arguments
const foundPort = process.argv.findIndex(item => item === '--port') + 1
if (foundPort > 0 &&
    foundPort < process.argv.length &&
    Number(process.argv[foundPort]) > 0 &&
    Number(process.argv[foundPort]) < 65535
    )
    port = Number(process.argv[foundPort])

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
            font: "Inter",
            class: "Inter"
        })
    })

app.route("/nunito")
    .get(function (req, res, rext) {
        res.render('comparrison', {
            title: "Nunito",
            font: "Nunito",
            class: "Nunito"
        })
    })

app.route("/lato")
    .get(function (req, res, rext) {
        res.render('comparrison', {
            title: "Lato",
            font: "Lato",
            class: "Lato"
        })
    })

app.route("/avenirnext")
    .get(function (req, res, rext) {
        res.render('comparrison', {
            title: "Avenir Next",
            font: "Avenir Next",
            class: "AvenirNext"
        })
    })

app.route("/sailec")
    .get(function (req, res, rext) {
        res.render('comparrison', {
            title: "Sailec",
            font: "Sailec",
            class: "Sailec"
        })
    })

app.route("/cast")
    .get(function (req, res, rext) {
        res.render('comparrison', {
            title: "Cast",
            font: "Cast",
            class: "Cast"
        })
    })

app.route("/monolith")
    .get(function (req, res, rext) {
        res.render('comparrison', {
            title: "Monolith Sans",
            font: "Monolith Sans",
            class: "monolith"
        })
    })

app.route("/treyton")
    .get(function (req, res, rext) {
        res.render('comparrison', {
            title: "Treyton Regular",
            font: "Treyton Regular",
            class: "Treyton"
        })
    })

app.route("/groteska")
    .get(function (req, res, rext) {
        res.render('comparrison', {
            title: "Groteska Regular",
            font: "Groteska Regular",
            class: "groteska"
        })
    })

app.route("/einergroteska")
    .get(function (req, res, rext) {
        res.render('comparrison', {
            title: "Einer Groteska",
            font: "Einer Groteska",
            class: "einergroteska"
        })
    })

app.route("/gilroy")
    .get(function (req, res, rext) {
        res.render('comparrison', {
            title: "Gilroy Light",
            font: "Gilroy Light",
            class: "gilroy"
        })
    })

app.route("/albori")
    .get(function (req, res, rext) {
        res.render('comparrison', {
            title: "Albori Sans",
            font: "Albori Sans",
            class: "albori"
        })
    })

app.route("/celesta")
    .get(function (req, res, rext) {
        res.render('comparrison', {
            title: "Celesta",
            font: "Celesta",
            class: "Celesta"
        })
    })


app.use(express.static(__dirname))

server.listen(port, () => {
    console.log(`Let's go! The server is up on ${port}`)
})