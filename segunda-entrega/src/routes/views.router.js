import {Router} from 'express';
import Users from '../dao/dbManagers/users.js';
import carts from '../dao/dbManagers/carts.js';

const usersManager = new Users();
const cartsManager = new carts();

const router = Router();

router.get('/',async(req,res)=>{
    let users = await usersManager.getAll();
    console.log(users);
    res.render('users',{users})
})

router.get('/carts',async(req,res)=>{
    let carts = await cartsManager.getAll();
    console.log(carts);
    res.render('carts',{carts})
})


export default router;