import { evaluateGameInput } from '../gameHandler';
import { describe, it, expect } from '@jest/globals';

describe('gameAlgo()', () => {
  //  Gör alla bokstäver små ifall spelaren väljer att blanda stora och små bokstäver.
  it('Output should be non capital letter nor include whitespace', () => {
    const output = evaluateGameInput('L I ', 'Li');
    expect(output).toEqual([
      { letter: 'l', result: 'Correct' },
      { letter: 'i', result: 'Correct' },
    ]);
  });
  // ifall ytterligare funktioner ska läggas på input vill jag säkerställa att input blir en array där varje bokstav blir ett item.
  it('Output should be an array', () => {
    const output = evaluateGameInput('Sverige', 'Schweiz');
    expect(Array.isArray(output)).toBe(true);
  });
  // Checks if player letter is indcluded in gameword and on the same index as game word.
  it('Show correct result to new array object', () => {
    const output = evaluateGameInput('ida', 'ide');
    expect(output).toEqual(
      expect.arrayContaining([
        { letter: 'i', result: 'Correct' },
        { letter: 'd', result: 'Correct' },
      ])
    );
  });
  // Checks if player letter is included in game word but not in the right index
  it('Show missplaced letter in array object', () => {
    const output = evaluateGameInput('rom', 'mor');
    expect(output).toEqual(
      expect.arrayContaining([
        { letter: 'm', result: 'Misplaced' },
        { letter: 'r', result: 'Misplaced' },
      ])
    );
  });
  // Checks if player letter is not included in game word. Also if left-over letters are treated as incorrect.
  it('Show incorrect letter in array object', () => {
    const output = evaluateGameInput('hallå', 'cykla');
    expect(output).toEqual([
      { letter: 'h', result: 'Incorrect' },
      { letter: 'a', result: 'Misplaced' },
      { letter: 'l', result: 'Incorrect' },
      { letter: 'l', result: 'Correct' },
      { letter: 'å', result: 'Incorrect' },
    ]);
  });
});
