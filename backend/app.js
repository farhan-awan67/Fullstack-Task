import express from "express";
const app = express();
import cors from "cors";
import connectDB from "./config/db.js";
import productRoute from "./routes/product.route.js";

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

//PORT
const PORT = process.env.PORT || 3000;

app.use("/api/products", productRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`server listening on ${PORT}`);
});
