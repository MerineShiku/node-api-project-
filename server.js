const express = require('express')
const mongoose = require('mongoose');
const Product = require ("./models/productModel")
const app = express()
const port = 3000


app.use(express.json())

//routes

app.get('/', (req, res) => {
    res.send('Hello World!');
  })


  app.get('/blog', (req, res) => {
    res.send('Read my blog!');
  })



  app.get('/users', (req, res) => {
    res.send('here are the users!');
  })


//fetch all products in the database
  
  app.get('/products',  async (req, res) => {
    try {

        const products = await Product.find({})
        res.status(200).json(products);


    }  catch (error) {

        console.log(error.message);
        res.status(500).json({message: error.message})


    }
})
       
//fetch product by Id
app.get('/products/:id',  async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findById(id)
        res.status(200).json(product);


    }  catch (error) {

        console.log(error.message);
        res.status(500).json({message: error.message})


    }
})
        


//update a product


app.put('/products/:id',  async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,  req.body)
       

        // we cannot find product to update
     if (!product){
        return res.status(404).json({message: `can't find the product with ${id}`});
     }else {

        const updatedProduct = await Product. findById(id)
        res.status(200).json(updatedProduct);

     }

    }  catch (error) {

        console.log(error.message);
        res.status(500).json({message: error.message})


    }
})
        

//add product to the database


  app.post('/product',  async (req, res) => {
    try {

        const product = await Product.create(req.body)
        res.status(200).json(product);


    }  catch (error) {

        console.log(error.message);
        res.status(500).json({message: error.message})


    }
   
    
  }
  
)


//delete product

app.delete('/products/:id', async (req, res) => {
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndDelete(id)
        if (!product){
            return res.status(404).json({message: `can't find the product with ${id}`});
         }else {
    
            res.status(200).json(product);
    
         }
    
        }  catch (error) {
    
            console.log(error.message);
            res.status(500).json({message: error.message})
    
    
        }
    
  }
  
)





mongoose.set("strictQuery", false)
mongoose.
connect ('mongodb+srv://admin:Daina05@merine05.vzfrf.mongodb.net/Users?retryWrites=true&w=majority&appName=merine05')
.then(()=> {
       console.log('connected to MongoDB')
       app.listen(port, () => {
        console.log(`Example app listening on port ${port}`)
        })
 
  
}

      ).catch((error) =>{
        console.log(error)
      })