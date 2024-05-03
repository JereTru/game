//Tester le calcul du nombre de mines adjacentes
//Tester la propagation de l'ouverture des cellules lorsqu'une cellule vide est cliquée

describe('Minesweeper Logic', () => {
    it('should calculate adjacent mines correctly', () => {
      const board = generateBoardWithMines();
      expect(countAdjacentMines(board, 1, 1)).toBe(2);
    });
  
    it('should reveal empty space correctly', () => {
      const board = setupBoardWithNoMinesAround(3, 3);
      openCell(board, 3, 3);
      expect(board[3][3].isRevealed).toBeTruthy();
      expect(board[2][2].isRevealed).toBeTruthy(); // adjacent cells
    });
  });
  