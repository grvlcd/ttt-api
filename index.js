import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import historyRoutes from "./routes/historyRoutes.js";
import { History } from "./models/history.model.js";

dotenv.config();
const PORT = process.env.PORT || 8000;
const app = express();

app.use(express.json());

app.use("/api/v1/histories", historyRoutes);

app.get("/", async (req, res) => {
  try {
    const histories = await History.find();
    res.json({
      message: "success",
      data: histories,
    });
  } catch (error) {
    res.json({
      message: error.message,
    });
  }
});

app.listen(PORT, async () => {
  await mongoose.connect(process.env.MONGO_DB_URL);
  console.log("CONNECTED TO DB");
  console.log(`RUNNING ON PORT ${PORT}`);
});
