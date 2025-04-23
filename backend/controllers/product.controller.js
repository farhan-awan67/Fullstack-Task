import Product from "../models/product.js";
import asyncHandler from "../utils/asyncHandler.js";

export const getProducts = asyncHandler(async (req, res) => {
  const products = await Product.find({});
  if (!products) {
    return res.json({ success: false, message: "no product found" });
  }
  res.status(200).json({ success: true, products });
});

export const addProduct = asyncHandler(async (req, res) => {
  const { name, price } = req.body;
  if (!name || !price) {
    res.json({ success: false, message: "all fields are required" });
  }
  const product = new Product({ name, price });
  await product.save();
  res.status(201).json({ success: true, message: "product added", product });
});
