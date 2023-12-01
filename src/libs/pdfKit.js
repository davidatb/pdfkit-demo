import PDFDocument from "pdfkit";

function buildPDF(datacallback, endcallback) {
  const doc = new PDFDocument();
  doc.on("data", datacallback);
  doc.on("end", endcallback);
}
