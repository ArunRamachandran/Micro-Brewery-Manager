import express from 'express';
import data from '../data/breweryData';
const router = express.Router();

//  @desc   Products/Get products from data base
//  @route  GET /products

router.get('/', (req, res) => {
    res.send('Products');
})

export default router;