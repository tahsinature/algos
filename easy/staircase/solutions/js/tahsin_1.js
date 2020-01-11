function staircase(n) {
  const getString = (str, repeat) =>
    Array(repeat)
      .fill(str)
      .join("");

  for (let i = n; i > 0; i--) {
    const numOfSpaces = i - 1;
    const numOfPound = n - numOfSpaces;
    console.log(`${getString(" ", numOfSpaces)}${getString("#", numOfPound)}`);
  }
}
