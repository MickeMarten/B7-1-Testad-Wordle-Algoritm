export function evaluateGameInput(playerInput, gameWord) {
  let playerArray = playerInput.toLowerCase().replace(/\s/g, '').split('');
  let gameArray = gameWord.toLowerCase().split('');
  const results = [];

  playerArray.forEach((letter, index) => {
    let gameWordIndex = gameArray.indexOf(letter);
    console.log(
      `Bokstav i förhållande till spelets valda ord ${letter}:`,
      gameWordIndex
    );
    if (gameArray[index] === letter) {
      results.push({ letter, result: 'Correct' });
    } else if (gameArray.includes(letter)) {
      results.push({ letter, result: 'Misplaced' });
    } else {
      results.push({ letter, result: 'Incorrect' });
    }
  });
  results.forEach((item) => {
    if (item.result === 'Misplaced') {
      const foundDuplicateLetters = results.filter(
        (result) => result.letter === item.letter && result.result === 'Correct'
      );
      if (foundDuplicateLetters.length > 0) {
        item.result = 'Incorrect';
      }
    }
  });
  console.log(results);
  return results;
}
