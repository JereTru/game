//Tester le calcul correct des scores des mains, en incluant les cas spéciaux des as
//Tester la logique de décision du croupier (stand sur 17 ou plus)

describe('Blackjack Game Logic', () => {
    it('should calculate hand score correctly', () => {
      const hand = [ { value: '10', suit: 'hearts' }, { value: 'Ace', suit: 'spades' } ];
      expect(calculateHandScore(hand)).toBe(21);
    });
  
    it('dealer should stand on 17', () => {
      const dealerHand = [ { value: '10', suit: 'hearts' }, { value: '7', suit: 'spades' } ];
      const dealerAction = dealerDecide(dealerHand);
      expect(dealerAction).toBe('stand');
    });
  });
  