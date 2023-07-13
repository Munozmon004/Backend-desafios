import ecommerceManager from "../models/carts.js";

export default class EcommerceManager {
   getProductos = () => {
      return ecommerceManager.find().lean(); 
   }

   getProductos = (id) => {
      return ecommerceManager.findById(id);
   }

   createProductos = (company) => {
       return ecommerceManager.create(productos);
   }

   updateProductos = (id, company) => {
       return ecommerceManager.findByIdAndUpdate(id,productos);

   }

   deleteProductos = (id) => {
       return companyModel.findByIdAndDelete(id);

   };
};
