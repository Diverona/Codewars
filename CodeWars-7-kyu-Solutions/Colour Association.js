/* Colour plays an important role in our lifes. Most of us like this colour better then another. User experience specialists believe that certain colours have certain psychological meanings for us.

You are given a 2D array, composed of a colour and its 'common' association in each array element. The function you will write needs to return the colour as 'key' and association as its 'value'.

For example:

var array = [["white", "goodness"], ...] //returns [{white: 'goodness'}, ...] */

// function colourAssociation(array) {
//   let res = [];
//   for (let i = 0; i < array.length; i++) {
//     a = array[i][0];
//     b = array[i][1];
//     res.push({ [a]: b });
//   }

//   return res;
// }

// console.log(colourAssociation(array));

// let res = [];
// for (let i = 0; i < array.length; i++) {
//   a = array[i][0];
//   b = array[i][1];
//   res[i] =  {[a]: b };
// }

// console.log(res);

// function colourAssociation(array) {
//   let res = [];

//   array.forEach((subArr) => {
//     [color, association] = subArr;
//     res.push({
//       [color]: association,
//     });
//   });
//   return res;
// }

// function colourAssociation(array) {
//   return array.map(([color, association]) => ({ [color]: association }));
// }

function colourAssociation(array) {
  return array.map((subArr) => Object.fromEntries([subArr]));
}

console.log(
  colourAssociation([
    ["white", "goodness"],
    ["blue", "tranquility"],
  ])
);
