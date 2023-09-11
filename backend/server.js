import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import connectDB from './config/db.js'
import products from './data/products.js'
const port = process.env.PORT || 5050;

connectDB()
const app = express()

app.get('/', (request, response)=>{
    response.send('Api is running...')
})

app.get('/api/products' , (request, response)=>{
    response.json(products)
})

app.get('/api/products/:id', (request, response) => {
    const product = products.find((p)=> p._id === request.params.id)
    response.json(product)
})


app.listen(port, ()=>console.log(`Server is running on port ${port}`))