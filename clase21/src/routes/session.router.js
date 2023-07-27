import { Router } from "express";
import userModel from "../dao/mongo/user.js";


const router = Router();

router.post('/register', async(req, res) => {
    const { first_name, last_name, email, password } = req.body;
    if(!first_name || !last_name || !email || !password)
      return res.status(400).send({ status: "error", error: "Faltan Datos"});
    const user = {
        first_name,
        last_name,
        email,
        password: createHash(password),
    }
    const result = await userModel.create(user);
    res.send({status:"success", payload: result});
})

router.post('/login', async(req, res) => {
    const {email, password} = req.body;
    const user = await userModel.findOne({email,password});
    if(!user) return res.status(400).send({status:"error",error:"Usuario o email incorrecto"});

    req.session.user = {
        name: `${user.first_name} ${user.last_name}`,
        email: user.email
    }

    res.sendStatus(200);
})

export default router;