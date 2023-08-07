import {Router} from 'express';
import Users from '../dao/dbManagers/users.js';
import carts from '../dao/dbManagers/carts.js';

const usersManager = new Users();
const cartsManager = new carts();
const router = Router();

router.get('/', async (req,res)=>{
    let users = await usersManager.getAll();
    if(!users) return res.status(500).send({status:"error",error:"Couldn't get users due to internal error"})
    res.send({status:"success",payload:users})
})

router.post('/:uid/carts/:cid',async(req,res)=>{
    const {uid,cid} = req.params;
    const carts = await cartsManager.getById(cid);
    if(!carts) 
     return res.status(404).send({status:"error",error:"Course not found"})
    const user = await usersManager.getBy({_id:uid});
    if(!user) 
     return res.status(404).send({status:"error",error:"User not found"});
    //checamos si el usuario ya tenía ese curso registrado
    let cartsExists = user.carts.some((carts)=>carts._id.toString()===cid);
    if(cartsExists) 
     return res.status(400).send({status:"error",error:"The user is already registered in this course"});
    //Si todo está bien, insertamos de ambos lados.
    user.carts.push(carts._id);
    carts.user.push(user._id);
    await usersManager.updateUser(uid,user);
    await cartsManager.updateCourse(cid,carts);
    res.send({status:"success",message:"User added item to Carts"})
})

export default router;