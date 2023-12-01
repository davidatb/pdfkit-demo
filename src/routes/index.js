import { Router } from "express";

const router = Router();

router.get("/invoice", (req, res) => {
    res.send("Invoice");
});

export default router;