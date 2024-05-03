//Tester que le serpent grandit correctement après avoir mangé une pomme
//Tester la détection de collision avec les murs ou lui-même

describe('Snake Game', () => {
    it('should grow snake when it eats an apple', () => {
      const game = new SnakeGame();
      game.snake = createSnakeAtPosition(5, 5);
      game.apple = placeAppleAt(5, 6);
      game.move('right');
      expect(game.snake.length).toBeGreaterThan(initialLength);
    });
  
    it('should detect collision with the wall', () => {
      const game = new SnakeGame();
      game.snake = createSnakeHeadingTowardsWall();
      game.move('right');
      expect(game.isGameOver).toBeTruthy();
    });
  });
  