import {assert} from 'console';
import {Game} from './game';

describe('Game class', () => {
  it('should initialize to time=0', () => {
    const game = new Game([]);

    expect(game.getTime()).toEqual(0);
  });

  it('should initialize game time to inputs length minus one', () => {
    const game = new Game([1, 2, 3, 4, 5]);

    expect(game.getTime()).toEqual(5);
  });

  describe('timeSince()', () => {
    it('should return 0 for numbers spoken only once', () => {
      const game = new Game([1, 2]);

      expect(game.timeSince(1)).toEqual(0);
      expect(game.timeSince(2)).toEqual(0);
    });

    it('should return 1 for numbers back to back', () => {
      const game = new Game([1, 2, 2]);

      expect(game.timeSince(2)).toEqual(1);
    });

    it('should return 2 for numbers spoke two turns apart', () => {
      const game = new Game([1, 2, 1, 2]);

      expect(game.timeSince(2)).toEqual(2);
    });

    it('should return time between instance of a number', () => {
      const game = new Game([1, 2, 3]);
      game.speak(1);

      expect(game.timeSince(1)).toEqual(3);
    });
  });

  describe('speak()', () => {
    it('should increment Game time', () => {
      const game = new Game([]);
      game.speak(1);

      expect(game.getTime()).toEqual(1);
    });

    it('should update last spoken time for the number', () => {
      const game = new Game([1, 2]);
      assert(game.timeSince(1) === 0);
      game.speak(1);

      expect(game.timeSince(1)).toEqual(2);
    });
  });
});
