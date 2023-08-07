import cartsModel from "../models/carts.js";

export default class carts{
    constructor(){
        console.log("Working courses with database in mongodb")
    }
    getAll = async () =>{
        //Profe, los cursos son tomados a partir de un lean para su mapeo en handlebars, puedes hacer un map
        //solamente en caso de que así lo desees (como se muestra en el Manager de usuarios);
        let carts = await cartsModel.find().lean().populate('users');
        return carts;
    }
    getById = async(id) =>{
        let carts = await cartsModel.findOne({_id:id}).populate('users');
        return carts;
    }
    saveCarts =async carts =>{
        let result = await cartsModel.create(course);
        return result;
    }
    updateCarts = async (id,course) =>{
        delete course._id; 
        let result = await cartsModel.updateOne({_id:id},{$set:carts})
        return result;
    }
}