import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import { setScore } from './store/gameScores';

const GameScoreComponent = () => {
  const scores = useSelector(state => state.gameScores.scores);
  const dispatch = useDispatch();

  const updateScore = (gameName, newScore) => {
    dispatch(setScore({ gameName, score: newScore }));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Game Scores</Text>
      {Object.entries(scores).map(([gameName, score]) => (
        <View key={gameName} style={styles.scoreRow}>
          <Text style={styles.gameName}>{gameName}: </Text>
          <Text style={styles.score}>{score}</Text>
          <Button title="Increase Score" onPress={() => updateScore(gameName, score + 1)} />
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#fff'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  scoreRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 10
  },
  gameName: {
    fontSize: 18
  },
  score: {
    fontSize: 18
  }
});

export default GameScoreComponent;
