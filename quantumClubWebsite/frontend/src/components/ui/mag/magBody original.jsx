import React, { useState } from "react";
import { Document, Page, pdfjs } from "react-pdf";
import { useLanguage } from "../../../context/LanguageContext";
import "react-pdf/dist/esm/Page/TextLayer.css";
import "react-pdf/dist/esm/Page/AnnotationLayer.css";

// Set up PDF.js worker for Vite compatibility
pdfjs.GlobalWorkerOptions.workerSrc = new URL(
  "pdfjs-dist/build/pdf.worker.min.js",
  import.meta.url
).toString();

const MagBody = () => {
  const { language } = useLanguage();
  const [selectedPDF, setSelectedPDF] = useState(null);

  // Vite requires public assets to be referenced via `/pdfs/`
  const pdfGallery = [
    { name: "Sample 1", url: "/pdfs/sample1.pdf" },
    { name: "Sample 2", url: "/pdfs/sample2.pdf" },
    { name: "Sample 3", url: "/pdfs/sample3.pdf" },
  ];

  return (
    <div className="p-6 rounded-lg shadow-lg max-w-3xl mx-auto bg-white">
      <h2 className="text-xl font-bold mb-4 text-gray-800">Select a PDF</h2>

      {/* PDF Selector */}
      <div className="flex gap-3 mb-4">
        {pdfGallery.map((pdf, index) => (
          <button
            key={index}
            className={`px-4 py-2 rounded-lg shadow-md text-white ${
              selectedPDF === pdf.url ? "bg-blue-600" : "bg-gray-500 hover:bg-gray-700"
            }`}
            onClick={() => setSelectedPDF(pdf.url)}
          >
            {pdf.name}
          </button>
        ))}
      </div>

      {/* PDF Viewer */}
      {selectedPDF ? (
        <div className="border rounded-lg overflow-hidden shadow-md">
          <Document
            file={selectedPDF}
            onLoadError={(error) => console.error("PDF Load Error:", error)}
            onSourceError={(error) => console.error("PDF Source Error:", error)}
            loading={<p className="text-gray-600">Loading PDF...</p>}
          >
            <Page pageNumber={1} width={500} />
          </Document>
        </div>
      ) : (
        <p className="text-gray-500 text-center">No PDF selected.</p>
      )}
    </div>
  );
};

export default MagBody;
