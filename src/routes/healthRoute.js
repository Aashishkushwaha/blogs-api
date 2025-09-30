import { Router } from "express";

const router = Router();

router.get("/", (_, res) => res.json({ status: "API is running" }));

export default router;