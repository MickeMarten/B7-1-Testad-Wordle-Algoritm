function handleStrings(str) {
  return str.toLowerCase().replace(/\s/g, '').split('');
}

export function evaluateGameInput(playerInput, gameWord) {
  const playerArray = handleStrings(playerInput);
  const gameArray = handleStrings(gameWord);
  const results = [];

  playerArray.forEach((letter, index) => {
    let gameWordIndex = gameArray.indexOf(letter);
    console.log(
      `Bokstav i förhållande till spelets valda ords position ${letter}:`,
      gameWordIndex
    );
    let result;
    if (gameArray[index] === letter) {
      result = 'Correct';
    } else if (gameArray.includes(letter)) {
      result = 'Misplaced';
    } else {
      result = 'Incorrect';
    }

    results.push({ letter, result });
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
evaluateGameInput('Hallå', 'Halå');
