function findLongestWord(string) {
  const array = string.split(" ");
  let longerWord = 0;
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length > longerWord) longerWord = array[i];
  }
  return longerWord;
}
