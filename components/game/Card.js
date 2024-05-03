// Carte pour Blackjack, Poker et Card Battle

import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const Card = ({ rank, suit, faceUp }) => (
  <View style={[styles.card, { backgroundColor: faceUp ? 'white' : 'grey' }]}>
    {faceUp && (
      <>
        <Text style={styles.rank}>{rank}</Text>
        <Image source={{ uri: `path_to_images/${suit}.png` }} style={styles.image} />
      </>
    )}
  </View>
);

const styles = StyleSheet.create({
  card: {
    width: 50,
    height: 75,
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: { width: 1, height: 1 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  rank: {
    position: 'absolute',
    top: 5,
    left: 5,
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 30,
    height: 30,
    resizeMode: 'contain',
  }
});

export default Card;
