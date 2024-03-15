import { Router } from "express";
import { getAllItems } from "../src/controllers/getJoyas.js";

const router = Router();

router.get("/joyas", getAllItems);

export default router;
