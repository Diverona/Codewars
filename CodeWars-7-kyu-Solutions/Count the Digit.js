/* Take an integer n (n >= 0) and a digit d (0 <= d <= 9) as an integer.

Square all numbers k (0 <= k <= n) between 0 and n.

Count the numbers of digits d used in the writing of all the k**2.

Call nb_dig (or nbDig or ...) the function taking n and d as parameters and returning this count.

Examples:
n = 10, d = 1 
the k*k are 0, 1, 4, 9, 16, 25, 36, 49, 64, 81, 100
We are using the digit 1 in: 1, 16, 81, 100. The total count is then 4.

nb_dig(25, 1) returns 11 since
the k*k that contain the digit 1 are:
1, 16, 81, 100, 121, 144, 169, 196, 361, 441.
So there are 11 digits 1 for the squares of numbers between 0 and 25.
Note that 121 has twice the digit 1. */

// function nbDig(n, d) {
//   let arr = [];
//   for (let i = 0; i < n; i++) {
//     arr[i] = i * i;
//   }
//   arr.reduce((sum, el) => {
//     for (let k of el.toString()) {
//       if (k === d) {
//         sum++;
//       }
//     }
//   }, 0);
//   return sum;
// }

// function nbDig(n, d) {
//   let arr = [];
//   let sum = 0;
//   for (let i = 0; i <= n; i++) {
//     arr[i] = i * i;
//   }

//   for (let el of arr) {
//     el = el + "";

//     for (let k of el) {
//       if (+k === d) {
//         sum++;
//       }
//     }
//   }
//   return sum;
// }

// function nbDig(n, d) {
//   const arr = [];
//   let count = 0;

//   getArrOfSquares();

//   turnArrElemsToArrs();
//   function turnArrElemsToArrs() {
//     return arr.map((el) => el.toString().split(""));
//   }

// 	console.log(arr);

//   for (let el of arr) {
//     let subArr = el.toString().split("");

//     for (let num of subArr) {
//       if (+num === d) count++;
//     }
//   }

//   return count;

//   function getArrOfSquares() {
//     for (let i = 0; i <= n; i++) {
//       arr.push(i ** 2);
//     }
//   }
// }

function nbDig(n, d) {
  const arr = [];
  let count = 0;

  getArrOfSquares();

  for (let el of arr) {
    let subArr = turnArrElemsToArrs(el);

    for (let num of subArr) {
      countDinElemsOfArr(num);
    }
  }

  return count;

  function turnArrElemsToArrs(el) {
    return el.toString().split("");
  }

  function getArrOfSquares() {
    for (let i = 0; i <= n; i++) {
      arr.push(i ** 2);
    }
  }

  function countDinElemsOfArr(num) {
    if (+num === d) count++;
  }
}
