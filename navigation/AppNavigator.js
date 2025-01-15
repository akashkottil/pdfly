import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from '../screens/HomeScreen';
import PDFScreen from '../screens/PDFScreen';
import OnboardingScreen from '../screens/OnboardingScreen';

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      <Stack.Screen 
        name="Onboarding" 
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen 
        name="Home" 
        component={HomeScreen}
        options={{ title: 'PDF Viewer' }}
      />
      <Stack.Screen 
        name="PDFView" 
        component={PDFScreen}
        options={{ title: 'View PDF' }}
      />
    </Stack.Navigator>
  );
} 