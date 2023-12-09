const express = require('express')

const app = express()

const expressHandlebars = require('express-handlebars')

const bodyParser = require('body-parser')

app.use(bodyParser.urlencoded({ extended: true}))

const handler = require('./lib/handler')

//configure our express app to use handlebars
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
 }))

app.set('view engine','handlebars')

//Static files or folders are specified before any routes
app.use(express.static(__dirname + "/public"))

const port = process.env.port || 3000

const emails = []

//Create the default landing page
app.get('/', (request, response) => {
    response.render("home");
    })

app.get('/about', (request, response) => {
    response.render("about");
    })

app.get('/product/:id',handler.showProduct)

app.get('/category/:category',handler.showCategory)

app.post('/cart', handler.addToCartProcess)

//custom 404 error page to handle non-existing routes
app.use( (request,response) => {
    response.type('text/plain')
    response.status(404)
    response.send('404 - not found')
 })
 // custom 500 error page to handle errors in our code
 app.use( (error, request, response, next) => {
 console.error(error.message)
 response.type('text/plain')
 response.status(500)
 response.send('500 - server error')
 })

 
//start the server
app.listen(port, ()=> {
    console.log(`Express is running on http://localhost:${port};`)
    console.log(` press Ctrl-C to terminate.`)
    })
    