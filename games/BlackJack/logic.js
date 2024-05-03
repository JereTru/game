import { loadSettings } from '../config/settings';
import { getRandomNumber } from '../utils/randomizer';

const settings = loadSettings();

export const initializeDeck = (decksCount = 1) => {
  const suits = ['hearts', 'diamonds', 'clubs', 'spades'];
  const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
  let deck = [];
  for (let d = 0; d < decksCount; d++) {
      for (let suit of suits) {
          for (let rank of ranks) {
              deck.push({ rank, suit, faceUp: false });
          }
      }
  }
  return shuffleDeck(deck);
};

export const shuffleDeck = (deck) => {
  for (let i = deck.length - 1; i > 0; i--) {
      const j = getRandomNumber(0, i + 1);
      [deck[i], deck[j]] = [deck[j], deck[i]];
  }
  return deck;
};

export const calculateScore = (cards) => {
  let score = 0;
  let aces = 0;
  cards.forEach(card => {
    let value = card.rank;
    if (['Jack', 'Queen', 'King'].includes(value)) {
      score += 10;
    } else if (value === 'Ace') {
      aces += 1;
      score += 11;
    } else {
      score += parseInt(value);
    }
  });
  while (score > 21 && aces > 0) {
    score -= 10;
    aces -= 1;
  }
  return score;
};


  export const checkGameOver = (playerScore, dealerScore) => {
    if (playerScore > 21) return { gameOver: true, winner: 'Dealer' };
    if (dealerScore > 21) return { gameOver: true, winner: 'Player' };
    if (playerScore === 21) return { gameOver: true, winner: 'Player' };
    if (dealerScore === 21) return { gameOver: true, winner: 'Dealer' };
    return { gameOver: false };
  };
  