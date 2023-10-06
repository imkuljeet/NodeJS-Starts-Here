// const http = require('http');

const express = require('express');
const bodyParser = require('body-parser');

const app = express();

const adminRoutes = require('./routes/admin');

const shopRoutes = require('./routes/shop');

// app.use('/',(req,res,next)=>{
//     console.log('This always runs');
//     next();
// });

app.use(bodyParser.urlencoded({extended: false}));

// app.get('/add-product',(req,res,next)=>{
//     // console.log('In another middleware');
//     res.send('<form action ="/product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>');
// });

app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req,res,next)=>{
    res.status(404).send('<h1>Page Not Found</h1>');
})





// app.post('/product',(req,res,next)=>{
//     console.log(req.body);
//     res.redirect('/');
// })



// const server = http.createServer(routes);
// const server = http.createServer(app);

// server.listen(4000);

app.listen(4000);