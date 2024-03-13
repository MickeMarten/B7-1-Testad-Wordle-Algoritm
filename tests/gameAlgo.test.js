import { gameAlgorithm } from '../gamealgo';
import { describe, it, expect } from '@jest/globals';
// börja med testfall som gör minsta möjliga.
// Tänk på en sak i taget.
// skriv test för funk som du inte byggt än.
//TEster kommer misslyckas först
// skriv logik
//Tester lyckas
//börja om på nästa funktionalitet.

describe('gameAlgo()', () => {
  // Gör alla bokstäver små ifall spelaren väljer att blanda stora och små bokstäver.
  // it('Output should be non capital letter', () => {
  //   const output = gameAlgorithm('SVerige', 'Schweiz');
  //   expect(output).toBe('sverige', 'schweiz');
  // });
  // ifall ytterligare funktioner ska läggas på input vill jag säkerställa att input blir en array där varje bokstav blir ett item.
  it('Output should be an array', () => {
    const output = gameAlgorithm('Sverige', 'Schweiz');
    expect(Array.isArray(output)).toBe(true);
  });

  it('Should show correct result to new array object', () => {
    const output = gameAlgorithm('ida', 'ide');
    expect(output).toEqual(
      expect.arrayContaining([
        { letter: 'i', result: 'Correct' },
        { letter: 'd', result: 'Correct' },
      ])
    );
  });

  it('Should show missplaced letter in array object', () => {
    const output = gameAlgorithm('rom', 'mor');
    expect(output).toEqual(
      expect.arrayContaining([
        { letter: 'm', result: 'Missplaced' },
        { letter: 'r', result: 'Missplaced' },
      ])
    );
  });
  it('Should show incorrect letter in array object', () => {
    const output = gameAlgorithm('hallå', 'cykla');
    expect(output).toEqual(
      expect.arrayContaining([
        { letter: 'h', result: 'Incorrect' },
        { letter: 'a', result: 'Missplaced' },
        { letter: 'l', result: 'Correct' },
        { letter: 'l', result: 'Incorrect' },
        { letter: 'å', result: 'Incorrect' },
      ])
    );
  });
});
