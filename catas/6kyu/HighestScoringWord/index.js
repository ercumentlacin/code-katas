function high(x) {
  const wordList = x.split(" ");

  return wordList.reduce(
    (result, word) => {
      const letterAScore = "a".charCodeAt(); // letter a's unicode value is 97
      const wordScore = word
        .split("")
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
    { word: "", score: 0 }
  ).word;
}

module.exports = high;
