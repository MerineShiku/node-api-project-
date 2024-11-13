const express = require('express')
const mongoose = require('mongoose');
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


        



  app.post('/product', (req, res) => {
   console.log(req.body);
   res.send(req.body);
   
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