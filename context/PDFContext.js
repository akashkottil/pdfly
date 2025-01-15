import React, { createContext, useState, useContext } from 'react';

const PDFContext = createContext();

export function PDFProvider({ children }) {
  const [currentPDF, setCurrentPDF] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const [zoomLevel, setZoomLevel] = useState(1);
  const [totalPages, setTotalPages] = useState(0);

  const value = {
    currentPDF,
    setCurrentPDF,
    currentPage,
    setCurrentPage,
    zoomLevel,
    setZoomLevel,
    totalPages,
    setTotalPages,
  };

  return <PDFContext.Provider value={value}>{children}</PDFContext.Provider>;
}

export const usePDFContext = () => useContext(PDFContext); 