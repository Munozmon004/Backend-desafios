import mongoose from 'mongoose';

const cartsCollection = 'Carts';

const cartsSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    users:{
        type:[
            {
                type:mongoose.SchemaTypes.ObjectId,
                ref:'Users'
            }
        ],
        default:[]
    }
})

const cartsModel = mongoose.model(cartsCollection,cartsSchema);
export default cartsModel;