//Tester que les cartes ont des attributs et des effets correctement appliqués lors d'un combat
//Tester le calcul des points de vie après un tour de combat

describe('Card Battle Game Logic', () => {
    it('should apply card effects correctly', () => {
      const playerCard = { attack: 5, effect: 'doubleDamage' };
      const enemyCard = { defense: 3 };
      const result = resolveBattle(playerCard, enemyCard);
      expect(result.damageDealt).toBe(10);
    });
  
    it('should calculate health points correctly after a battle', () => {
      const playerHP = 20;
      const damage = 5;
      const newHP = calculateHealthPoints(playerHP, damage);
      expect(newHP).toBe(15);
    });
  });
  