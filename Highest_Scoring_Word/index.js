function high(x) {
  const wordList = x.split(' ');

  return wordList.reduce(
    (result, word) => {
      const letterAScore = 'a'.charCodeAt(); // letter a's unicode value is 97
      const wordScore = word
        .split('')
        .reduce(
          (score, letter) => score + letter.charCodeAt(0) - letterAScore + 1,
          0
        );
      if (wordScore > result.score) {
        result.word = word;
        result.score = wordScore;
      }

      return result;
    },
    { word: '', score: 0 }
  ).word;
}

// with for loop
function high(x) {
  let [word, score] = ['', 0];
  const wordList = x.split(' ');

  const getWordScore = (word) =>
    word
      .split('')
      .reduce(
        (score, letter) => score + letter.charCodeAt() - 'a'.charCodeAt() + 1,
        0
      );

  for (const word_ of wordList) {
    const wordScore = getWordScore(word_);

    if (wordScore > score) {
      word = word_;
      score = wordScore;
    }
  }
  return word;
}

console.log(high('man i need a taxi up to ubud'), 'taxi');
console.log(high('what time are we climbing up the volcano'), 'volcano');
console.log(high('take me to semynak'), 'semynak');
console.log(high('aa b'), 'aa');
console.log(high('b aa'), 'b');
console.log(high('bb d'), 'bb');
console.log(high('d bb'), 'd');
console.log(high('aaa b'), 'aaa');
