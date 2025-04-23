import express from "express";
const app = express();
import cors from "cors";
import connectDB from "./config/db.js";
import productRoute from "./routes/product.route.js";

//cors options
const corsOptions = {
  origin: "https://fullstack-task-eight.vercel.app",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  optionsSuccessStatus: 200, // some legacy browsers (IE11, various SmartTVs) choke on 204
};

//middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors(corsOptions));

//PORT
const PORT = process.env.PORT || 3000;

app.use("/api/products", productRoute);

app.listen(PORT, () => {
  connectDB();
  console.log(`server listening on ${PORT}`);
});
