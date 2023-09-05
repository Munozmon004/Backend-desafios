import Business from "./models/Business.model.js";

class BusinessDAO {
  constructor() {}

  async getAll() {
    try {
      return await Business.find();
    } catch (error) {
      throw error;
    }
  }

  async getOne(id) {
    try {
      return await Business.findById(id);
    } catch (error) {
      throw error;
    }
  }

  async create(newBusinesInfo) {
    try {
      return await Business.create(newBusinesInfo);
    } catch (error) {
      throw error;
    }
  }

  async update(id, businesInfo) {
    try {
      return await Business.updateOne({ _id: id }, { $set: businesInfo });
    } catch (error) {
      throw error;
    }
  }
}

export default BusinessDAO;