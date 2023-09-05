import mongoose from "mongoose";

const collectionName = "business";

const collectionSchema = new mongoose.Schema({
  name: String,
  products: [],
});

const Business = mongoose.model(collectionName, collectionSchema);

export default Business;