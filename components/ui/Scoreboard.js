//Tableau des scores réutilisable

import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Scoreboard = ({ scores }) => (
  <View style={styles.container}>
    {scores.map((score, index) => (
      <Text key={index} style={styles.scoreText}>
        Player {score.player}: {score.value}
      </Text>
    ))}
  </View>
);

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    padding: 20,
    borderRadius: 5,
    margin: 10
  },
  scoreText: {
    fontSize: 18,
    color: '#333',
    padding: 5,
  }
});

export default Scoreboard;
