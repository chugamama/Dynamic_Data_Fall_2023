const express = require('express')

//add the view engine after express
const expressHandlebars = require('express-handlebars')

const app = express()

//configure our express app to use handlebars
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
 }))

app.set('view engine','handlebars')

const port = process.env.port || 3000

app.get('/',(req,res)=>{
    res.render('home')
 })
 

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
    