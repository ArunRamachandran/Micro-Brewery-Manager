import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan'
import bodyParser from 'body-parser'
import productsRoute from './routes/productsRoute'

dotenv.config({ path: './config/config.js' })

const app = express()

if (process.env.NODE_ENV === 'development') {
    app.use(morgan('dev'))
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const PORT = process.env.PORT || 5000

// Routes
app.use('/api/products', productsRoute)

app.listen(
    PORT, 
    console.log(`Server is running in ${process.env.NODE_ENV} mode on port ${process.env.PORT}`))