import { Router } from "express";
import { buildPDF } from "../libs/pdfKit.js";

const router = Router();

router.get("/invoice", (_, res) => {
  
  const stream = res.writeHead(200, {
    "Content-Type": "application/pdf",
    "Content-Disposition": 'attachment; filename="invoice.pdf"'
  });

  buildPDF(
    (data) => { stream.write(data); },
    () => { stream.end(); }
  );

  res.send("Invoice");
});

export default router;