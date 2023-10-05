// const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

// app.use('/',(req,res,next)=>{
//     console.log('This always runs');
//     next();
// });

app.use(bodyParser.urlencoded({extended: false}));

// app.get('/add-product',(req,res,next)=>{
//     // console.log('In another middleware');
//     res.send('<form action ="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
// });

app.get('/add-product', (req, res, next) => {
    res.send('<form action="/product" method="POST">' +
        '<input type="text" name="title" placeholder="Product Title">' +
        '<input type="text" name="size" placeholder="Product Size">' +
        '<button type="submit">Add Product</button>' +
        '</form>');
});



// app.post('/product',(req,res,next)=>{
//     console.log(req.body);
//     res.redirect('/');
// })

app.post('/product', (req, res, next) => {
    const title = req.body.title;
    const size = req.body.size;
    
    console.log('Title:', title);
    console.log('Size:', size);
    
    res.redirect('/');
});




app.use('/',(req,res,next)=>{
    console.log('In another middleware');
    res.send('<h1>Hello From Express</h1>');
});
// const server = http.createServer(routes);
// const server = http.createServer(app);

// server.listen(4000);

app.listen(4000);