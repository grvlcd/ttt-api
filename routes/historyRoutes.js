import express from "express";
import { getHistory, saveHistory } from "../controller/historyController.js";

const historyRoutes = express.Router();

historyRoutes.get("/", getHistory);

historyRoutes.post("/", saveHistory);

export default historyRoutes;
