import { Router } from "express";
import BusinessDAO from "../dao/Business.dao.js";

const Business = new BusinessDAO();
const router = Router();

router.get("/", async (req, res) => {
    try {
        const business = await Business.getAll();
        res.json({ status: "success", message: business });
    } catch (error) {
        res.status(500).json({ status: "error", error });
    }
});

router.get("/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const busines = await Business.getOne(id);
  
      res.json({ status: "success", message: busines });
    } catch (error) {
      res.status(500).json({ status: "error", error });
    }
});

router.post("/", async (req, res) => {
  try {
    const { name } = req.body;
    const newBusinesInfo = {
      name,
    };
    const newBusines = await Business.create(newBusinesInfo);

    res.json({ status: "success", message: newBusines });
  } catch (error) {
    res.status(500).json({ status: "error", error });
  }
});

router.patch("/:id/addProducts", async (req, res) => {
  try {
    const { id } = req.params;
    const { name, price } = req.body;
    const newProductInfo = {
      name,
      price,
    };

    const busines = await Business.getOne(id);
    busines.products.push(newProductInfo);

    const businesUpdate = await Business.update(id, busines);

    res.json({ status: "success", message: businesUpdate });
  } catch (error) {
    res.status(500).json({ status: "error", error });
  }
});

export default router;