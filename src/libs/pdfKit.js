import PDFDocument from "pdfkit-table";

export function buildPDF(datacallback, endcallback) {
  const doc = new PDFDocument();
  doc.on("data", datacallback);
  doc.on("end", endcallback);
  doc.fontSize(25).text("Some text with an embedded font!", 100, 100);
  doc.text("Here is some vector graphics...");

  const tableArray = {
    headers: ["Country", "Conversion rate", "Trend"],
    rows: [
      ["Switzerland", "12%", "+1.12%"],
      ["France", "67%", "-0.98%"],
      ["England", "33%", "+4.44%"],
    ],
  };
  doc.table( tableArray, { width: 500 }); // A4 595.28 x 841.89 (portrait) (about width sizes)

  doc.end();
}
