//Tester si le composant reconnaît un gagnant correctement en fournissant des états de grille spécifiques
//Tester la fonction qui vérifie le match nul

describe('Tic Tac Toe Logic', () => {
    it('should detect a win correctly', () => {
      const board = ['X', 'X', 'X', null, null, null, null, null, null];
      expect(checkWinner(board)).toBe('X');
    });
  
    it('should detect a draw correctly', () => {
      const board = ['X', 'O', 'X', 'X', 'X', 'O', 'O', 'X', 'O'];
      expect(checkWinner(board)).toBe('Draw');
    });
  });
  