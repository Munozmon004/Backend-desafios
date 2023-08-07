import { Router } from 'express';
import carts from '../dao/dbManagers/carts.js';

const router = Router();
const cartsManager = new carts();

router.get('/',async(req,res)=>{
    let carts = await cartsManager.getAll();
    res.send({status:"success",payload:carts})
})

router.post('/',async(req,res)=>{
    const {title,description} = req.body;
    let newCarts = {
        title,
        description,
        users:[],
        products:'empty'
    }
    const result = await cartsManager.saveCarts(newCarts);
    res.send({status:"success",payload:result});
})

export default router;