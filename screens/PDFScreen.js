import React, { useEffect } from 'react';
import { View, StyleSheet, Alert } from 'react-native';
import { usePDFContext } from '../context/PDFContext';
import PDFViewer from '../components/PDFViewer';
import SearchBar from '../components/SearchBar';
import ZoomControl from '../components/ZoomControl';
import PageControl from '../components/PageControl';
import { colors } from '../styles/colors';

export default function PDFScreen({ navigation }) {
  const { 
    currentPDF, 
    currentPage, 
    setCurrentPage, 
    totalPages,
    zoomLevel,
    setZoomLevel 
  } = usePDFContext();

  useEffect(() => {
    if (!currentPDF?.uri) {
      Alert.alert(
        'Error',
        'No PDF file selected',
        [{ text: 'OK', onPress: () => navigation.goBack() }]
      );
    }
  }, [currentPDF]);

  const handleSearch = (searchText) => {
    // TODO: Implement search functionality
    console.log('Searching for:', searchText);
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.25, 3));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.25, 0.5));
  };

  const handlePageChange = (newPage) => {
    if (newPage >= 1 && newPage <= totalPages) {
      setCurrentPage(newPage);
    }
  };

  if (!currentPDF?.uri) {
    return null;
  }

  return (
    <View style={styles.container}>
      <SearchBar onSearch={handleSearch} />
      
      <View style={styles.pdfContainer}>
        <PDFViewer 
          uri={currentPDF.uri} 
          zoomLevel={zoomLevel}
        />
      </View>

      <ZoomControl 
        onZoomIn={handleZoomIn} 
        onZoomOut={handleZoomOut} 
      />
      
      <PageControl 
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  pdfContainer: {
    flex: 1,
    backgroundColor: colors.background,
  },
}); 