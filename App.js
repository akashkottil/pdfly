import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { PDFProvider } from './context/PDFContext';
import AppNavigator from './navigation/AppNavigator';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

export default function App() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <PDFProvider>
        <NavigationContainer>
          <AppNavigator />
        </NavigationContainer>
      </PDFProvider>
    </GestureHandlerRootView>
  );
}
