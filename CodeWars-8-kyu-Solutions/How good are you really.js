/* There was a test in your class and you passed it. Congratulations!
But you're an ambitious person. You want to know if you're better than the average student in your class.

You receive an array with your peers' test scores. Now calculate the average and compare your score!

Return True if you're better, else False!

Note:
Your points are not included in the array of your class's points. For calculating the average point you may add your point to the given array!*/

function betterThanAverage(classPoints, yourPoints) {
  let averagePoint = yourPoints;

  for (let point of classPoints) {
    averagePoint += point;
  }
  averagePoint /= classPoints.length + 1;
  return yourPoints > averagePoint;
}

console.log(betterThanAverage([2, 3], 5));

const solution = (a, b) =>
  a.length < b.length ? `${a}${b}${a}` : `${b}${a}${b}`;
