//Tester l'identification de différentes mains de poker (ex: flush, straight)
//Tester la distribution des cartes pour s'assurer que les cartes sont distribuées équitablement et aléatoirement

describe('Poker Game Logic', () => {
    it('should identify a flush', () => {
      const hand = createFlushHand();
      expect(checkHand(hand)).toBe('flush');
    });
  
    it('should deal cards randomly', () => {
      const deck = new Deck();
      const hand1 = deck.deal(5);
      const hand2 = deck.deal(5);
      expect(hand1).not.toEqual(hand2);
    });
  });
  