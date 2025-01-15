import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, ScrollView } from 'react-native';
import * as FileSystem from 'expo-file-system';
import { WebView } from 'react-native-webview';
import { colors } from '../styles/colors';

export default function PDFViewer({ uri, zoomLevel }) {
  const [pdfUri, setPdfUri] = useState(null);

  useEffect(() => {
    if (uri) {
      // If the URI is a file:// URI, use it directly
      if (uri.startsWith('file://')) {
        setPdfUri(uri);
      } else {
        // For content:// URIs, we need to copy the file to app's cache directory
        const copyFile = async () => {
          try {
            const fileName = 'temp.pdf';
            const destination = `${FileSystem.cacheDirectory}${fileName}`;
            await FileSystem.copyAsync({
              from: uri,
              to: destination
            });
            setPdfUri(`file://${destination}`);
          } catch (error) {
            console.error('Error copying PDF file:', error);
          }
        };
        copyFile();
      }
    }
  }, [uri]);

  if (!pdfUri) {
    return <View style={styles.container} />;
  }

  // Create a HTML template to display PDF
  const htmlContent = `
    <!DOCTYPE html>
    <html>
    <head>
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no" />
    </head>
    <body style="margin:0; padding:0;">
      <iframe
        src="${pdfUri}"
        style="border: none; width: 100vw; height: 100vh; transform: scale(${zoomLevel});"
      ></iframe>
    </body>
    </html>
  `;

  return (
    <View style={styles.container}>
      <WebView
        style={styles.webview}
        source={{ html: htmlContent }}
        originWhitelist={['*']}
        scalesPageToFit={false}
        scrollEnabled={true}
        javaScriptEnabled={true}
        domStorageEnabled={true}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  webview: {
    flex: 1,
  },
}); 