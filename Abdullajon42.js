// function numberSplit(n) {
//   let x = [];
//   let y = n % 2;
//   let z = n / 2;
//   if (y == 0) {
//     x.push(z, z);
//   }
//   if (y !== 0) {
//     x.push(z - 0.5, z + 0.5);
//   }
//   return x;
// }

// function addNums(nums) {
//   let x = nums.split(',')
//   let res =0;
//   x.forEach(element => {
//     let z = parseInt(element)
//     res +=z
//   });
//   return res

// }

// function filterArray(arr) {
//   return arr.filter(x => typeof x !== 'string');
// }


// function maxTotal(nums) {
// let sort = nums.sort((a,b)=>a-b)
// let sum =0;
// for (let i = 5; i < sort.length; i++) {
//   sum += sort[i]
// }
// return sum
// }


// sliceSum([1, 3, 2], 2) ➞ 4

// sliceSum([4, 2, 5, 7], 4) ➞ 18

// sliceSum([3, 6, 2], 0) ➞ 0


// function sliceSum(arr, n) {
// 	let newArr = arr.slice(0,n)
//   let count =0;
//   for (let i = 0; i < newArr.length; i++) {
//     count+=newArr[i]
//   }
// return count
// }

// cardHide("1234123456785678") ➞ "************5678"

let card = '1234123456785678'

function cardHide(card) {
let turt = card.slice(-4)
let boshi = card.slice(0, -4)
let res=[]
for (let i = 0; i < boshi.length; i++) {
  res.push(boshi[i]='*')

}
return res

}

let res = cardHide(card)
console.log(res);