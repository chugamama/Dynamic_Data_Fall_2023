const express = require('express');

//add the view engine
const exppressHandlebars = require('express-handlebars')

const app = express();

//configure our express app to use handlebars
app.engine('handlebars', exppressHandlebars.engine({
    defaultLayout:'main',
}))

app.set('view engine','handlebars')
//end of handlebar configuration

const port = process.env.port || 3000

//routes go before 404 and before the 500 error 
app.get('/',(req,res)=>{
    res.render('home')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
//this generates an error becasue the parameter names dont match (response should be res or res change it to response)
app.get('/nightlife',(request,response)=>{
    res.type('text/plain')
    res.send('Miami at night')
})


//error handling -> app.use() basic express route. we will always respond to not found if the resource does not exist 
app.use((req,res) => {
    res.status(404)
    res.render('404')
})

//server error 500 - something wrong with your code
app.use((error,req, res,next)=>{
    console.log(error.mesage)
    res.status(500)
    res.render('500')
})

//setup listener/start the server
app.listen(port,()=>{
    console.log(`server started http://localhost:${port}`)
    //console.log(`server started http://localhost:`+ port) // this and the one above are the same thing
    console.log('to close pres Ctrl-C')
})