// Grille pour Tic Tac Toe et Connect Four

import React from 'react';
import { View, StyleSheet } from 'react-native';

const Grid = ({ children, size }) => (
  <View style={styles.container}>
    <View style={{ flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'center' }}>
      {children.map((child, index) => (
        <View key={index} style={{ width: `${100 / size}%`, aspectRatio: 1 }}>
          {child}
        </View>
      ))}
    </View>
  </View>
);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
  }
});

export default Grid;
