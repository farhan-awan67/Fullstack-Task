import express from "express";
const router = express.Router();
import { addProduct, getProducts } from "../controllers/product.controller.js";

router.get("/", getProducts);
router.post("/", addProduct);

export default router;
