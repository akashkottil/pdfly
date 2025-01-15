import React from 'react';
import { View, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/colors';

export default function ZoomControl({ onZoomIn, onZoomOut }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={onZoomIn} style={styles.button}>
        <Ionicons name="add" size={24} color={colors.primary} />
      </TouchableOpacity>
      <TouchableOpacity onPress={onZoomOut} style={styles.button}>
        <Ionicons name="remove" size={24} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 20,
    bottom: 100,
    backgroundColor: colors.background,
    borderRadius: 20,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  button: {
    padding: 10,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.border,
  },
}); 