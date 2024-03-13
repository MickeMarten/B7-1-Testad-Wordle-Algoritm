export function gameAlgorithm(playerInput, gameWord) {
  let playerArray = playerInput.toLowerCase().replace(/\s/g, '').split('');
  let gameArray = gameWord.toLowerCase().split('');
  const result = [];

  playerArray.forEach((letter, index) => {
    let gameWordIndex = gameArray.indexOf(letter);
    console.log(
      `Position på gissad bokstav i förhållande till spelets valda ord ${letter}:`,
      gameWordIndex
    );
    if (gameArray[index] === letter) {
      result.push({ letter, result: 'Correct' });
    } else if (gameArray.includes(letter)) {
      result.push({ letter, result: 'Missplaced' });
    } else {
      result.push({ letter, result: 'Incorrect' });
    }
  });
  console.log(result);
  return result;
}

gameAlgorithm('hallå', 'cykla');
