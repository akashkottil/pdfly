import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import LottieView from 'lottie-react-native';
import { colors } from '../styles/colors';

export default function OnboardingScreen({ navigation }) {
  const handleGetStarted = () => {
    navigation.replace('Home');
  };

  return (
    <View style={styles.container}>
      <LottieView
        source={require('../assets/animations/welcome.json')}
        autoPlay
        loop
        style={styles.animation}
      />
      
      <Text style={styles.title}>Welcome to PDFly</Text>
      <Text style={styles.subtitle}>
        Your personal PDF viewer with advanced features
      </Text>

      <TouchableOpacity 
        style={styles.button}
        onPress={handleGetStarted}
      >
        <Text style={styles.buttonText}>Get Started</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.background,
    padding: 20,
  },
  animation: {
    width: 200,
    height: 200,
    marginBottom: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.text,
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: colors.textSecondary,
    textAlign: 'center',
    marginBottom: 40,
  },
  button: {
    backgroundColor: colors.primary,
    padding: 15,
    borderRadius: 8,
    width: '80%',
  },
  buttonText: {
    color: colors.background,
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
  },
}); 