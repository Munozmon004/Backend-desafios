import mongoose from "mongoose";

const collectionName = "orders";

const collectionSchema = new mongoose.Schema({
    number: String,
    busines: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "business",
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "users",
      },
      products: [],
      totalPrice: Number,
});
    
collectionSchema.pre("find", function () {
    this.populate("busines").populate("user");
});
    
const Orders = mongoose.model(collectionName, collectionSchema);
    
export default Orders;