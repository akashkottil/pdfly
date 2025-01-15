import React from 'react';
import { View, TouchableOpacity, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../styles/colors';

export default function PageControl({ currentPage, totalPages, onPageChange }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity 
        onPress={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        style={styles.button}
      >
        <Ionicons 
          name="chevron-back" 
          size={24} 
          color={currentPage <= 1 ? colors.textSecondary : colors.primary} 
        />
      </TouchableOpacity>

      <Text style={styles.pageInfo}>
        {currentPage} / {totalPages}
      </Text>

      <TouchableOpacity 
        onPress={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        style={styles.button}
      >
        <Ionicons 
          name="chevron-forward" 
          size={24} 
          color={currentPage >= totalPages ? colors.textSecondary : colors.primary} 
        />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    backgroundColor: colors.background,
  },
  button: {
    padding: 10,
  },
  pageInfo: {
    marginHorizontal: 20,
    fontSize: 16,
    color: colors.text,
  },
}); 