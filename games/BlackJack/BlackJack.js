import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from '../../components/ui/Button';
import Card from '../../components/game/Card';
import Grid from '../../components/game/Grid';
import Scoreboard from '../../components/ui/Scoreboard';
import { initializeDeck, dealCard, calculateScore, checkGameOver } from './logic';
import { loadSettings } from '../../config/settings';

const Blackjack = () => {
  const settings = loadSettings();
  const blackjackSettings = settings.gameOptions.blackjack;

  const [deck, setDeck] = useState([]);
  const [playerCards, setPlayerCards] = useState([]);
  const [dealerCards, setDealerCards] = useState([]);
  const [playerScore, setPlayerScore] = useState(0);
  const [dealerScore, setDealerScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const [winner, setWinner] = useState('');

  useEffect(() => {
    startNewGame();
  }, []);

  const startNewGame = () => {
    let newDeck = initializeDeck(blackjackSettings.decksCount);
    let playerNewCards = [dealCard(newDeck), dealCard(newDeck)];
    let dealerNewCards = [dealCard(newDeck), dealCard(newDeck)];
    setDeck(newDeck);
    setPlayerCards(playerNewCards);
    setDealerCards(dealerNewCards);
    updateScores(playerNewCards, dealerNewCards);
  };

  const handleHit = () => {
    const newCard = dealCard(deck);
    const newPlayerCards = [...playerCards, newCard];
    setPlayerCards(newPlayerCards);
    setDeck(deck);
    updateScores(newPlayerCards, dealerCards);
  };

  const handleStand = () => {
    let newDealerCards = [...dealerCards];
    while (calculateScore(newDealerCards) < 17) {
      newDealerCards.push(dealCard(deck));
    }
    setDealerCards(newDealerCards);
    setDeck(deck);
    const newDealerScore = calculateScore(newDealerCards);
    setDealerScore(newDealerScore);
    checkEndGame(playerScore, newDealerScore);
  };

  const updateScores = (playerNewCards, dealerNewCards) => {
    const newPlayerScore = calculateScore(playerNewCards);
    const newDealerScore = calculateScore(dealerNewCards);
    setPlayerScore(newPlayerScore);
    setDealerScore(newDealerScore);
    checkEndGame(newPlayerScore, newDealerScore);
  };

  const checkEndGame = (newPlayerScore, newDealerScore) => {
    const result = checkGameOver(newPlayerScore, newDealerScore);
    if (result.gameOver) {
      setGameOver(true);
      setWinner(result.winner);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Blackjack</Text>
      <Scoreboard scores={[{ player: 'Player', value: playerScore }, { player: 'Dealer', value: dealerScore }]} />
      <Grid size={3}>
        {playerCards.map((card, index) => (
          <Card key={index} rank={card.rank} suit={card.suit} faceUp={true} />
        ))}
      </Grid>
      <View style={styles.buttonContainer}>
        {!gameOver && (
          <>
            <Button title="Hit" onPress={handleHit} />
            <Button title="Stand" onPress={handleStand} />
          </>
        )}
      </View>
      {gameOver && <Text style={styles.gameOverText}>Game Over: Winner is {winner}</Text>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: '#FFF'
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  buttonContainer: {
    flexDirection: 'row',
    marginTop: 20
  },
  gameOverText: {
    marginTop: 20,
    fontSize: 18,
    color: 'red'
  }
});

export default Blackjack;
