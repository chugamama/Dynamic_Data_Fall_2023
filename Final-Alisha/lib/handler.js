let eList = {"users":[]} // require('../data/emails.json')

let cart = {"products":[]}

const fs = require("fs")

exports.newsletterSignupProcess = (req,res) => {

    //Then we do something here
    console.log(req.body)

    //the push method adds items to an array
    eList.users.push(req.body)

    var json = JSON.stringify(eList)

    console.log(json)

    fs.writeFileSync('./data/emails.json',json,'utf8',()=>{})

    res.redirect(303,'/newsletter/thankyou')

}

exports.showProduct = (req,res) => { 
    var products = require('../data/products.json')

    var productDetails = products.items.filter((product)=>{ 
        return product.id == req.params.id
     })
     console.log(productDetails)
    res.render("products",{"products":productDetails})
}

exports.showCategory = (req,res) => { 

    var products = require('../data/products.json')
    var categories = require('../data/categories.json')
    var categoryDetails = categories.categories.filter((category)=>{ 
        return category.url == req.params.category
     })


    var productDetails = products.items.filter((product)=>{ 
        return product.category == req.params.category
     })
     console.log(productDetails)
     console.log(productDetails.name)
     res.render('category',{"products": productDetails,"category":categoryDetails})

}

exports.addToCartProcess = (req,res) => {

    var json = JSON.stringify(cart)

    const allProducts = require('../data/products.json')

    const cartProducts = allProducts.items.filter((product) => {
        return product.id == req.para,s.id
    });

    console.log(req.body)

    cart.products.push(req.body)

    var tempProducts = {}

    res.render("cart",{"cartProducts":cart.products})

}

exports.newsletterUserDelete = (req,res) => {
    
    newList.users = eList.users.filter((user)=>{ 
        return user.email != req.params.email
     })
     
     console.log("deleting: " + req.params.email)

     var json = JSON.stringify(newList)
     
     console.log(json)

     fs.writeFile('./data/emails.json',json,'utf8',()=>{})
     
     res.send('<a href="/newsletter/list">Go Back</a>')

    }

exports.newsletterSignupProcess = (req,res) => {

    //Then we do something here
    console.log(req.body)
    //req.body.email
    //req.body.firstname
    //req.body.lastname
    var newUser = {
        'firstname' : req.body.firstname,
        'lastname' : req.body.lastname,
        'address':req.body.address,
        'city':req.body.city,
        'state':req.body.state,
        'zip':req.body.zip,
        'email' : req.body.email
    }
    //the push method adds items to an array
    eList.users.push(newUser)

    var json = JSON.stringify(eList)

    console.log(json)

    fs.writeFileSync('./data/emails.json',json,'utf8',()=>{})

   
    res.redirect(303,'/newsletter/thankyou')
    //res.send("you posted something to /process " + req.body.email)
     
   

}