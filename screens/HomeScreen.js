import React from 'react';
import { View, StyleSheet, TouchableOpacity, Text } from 'react-native';
import * as DocumentPicker from 'expo-document-picker';
import { usePDFContext } from '../context/PDFContext';
import LottieView from 'lottie-react-native';

export default function HomeScreen({ navigation }) {
  const { setCurrentPDF } = usePDFContext();

  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: 'application/pdf',
      });

      if (result.type === 'success') {
        setCurrentPDF(result);
        navigation.navigate('PDFView');
      }
    } catch (err) {
      console.error('Error picking document:', err);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.button} onPress={pickDocument}>
        <Text style={styles.buttonText}>Select PDF</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  animation: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  button: {
    backgroundColor: '#007AFF',
    padding: 15,
    borderRadius: 8,
    width: '80%',
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 