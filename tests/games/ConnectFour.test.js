//Tester la validation pour insérer un jeton dans une colonne.
//Tester la détection d'une série de quatre jetons verticalement, horizontalement, et diagonalement

describe('Connect Four Logic', () => {
    it('should allow placing a disc in a non-full column', () => {
      const board = createNewBoard();
      expect(canPlaceDisc(board, 3)).toBeTruthy();
    });
  
    it('should detect horizontal win correctly', () => {
      const board = createBoardWithHorizontalWin();
      expect(checkForWin(board)).toBe('Red');
    });
  });
  