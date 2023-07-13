const companyCollection = "ecommerce";

const ecommerceSchema = new mongoose.Schema({
    name: String,
    address: String,
    city: String,
    country: String,
    email: {
      type: String,
      unique: true,
    },
}); 

const ecommerceManager = mongoose.model(companyCollection, ecommerceSchema); 
export default ecommerceManager;