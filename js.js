// const atTheOldToad = {
//   potions: [
//     { name: "Speed potion", price: 460 },
//     { name: "Dragon breath", price: 780 },
//     { name: "Stone skin", price: 520 },
//   ],

// const { forEach } = require("lodash");

//   // Change code below this line

//   getPotions() {
//     return this.potions;
//   },
//   addPotion(newPotion) {
//     for (const potion of this.potions) {
//       if (potion.name === newPotion.name) {
//         return `Error! Potion ${newPotion} is already in your inventory!`;
//       }

//       return this.potions.push(newPotion);
//     }
//   },
//   removePotion(potionName) {
//     const { potions } = this;
//     for (i = 0; i < this.length; i += 1) {
//       if (potionName === this[i].name) {
//         potions.splice(i, 1);
//       }
//     }
//   },
//   updatePotionName(oldName, newName) {
//     for (const potion of potions) {
//       if (potion["name"] !== oldName) {
//         return `Potion ${oldName} is not in inventory!`;
//       }
//       potion["name"] = newName;
//     }
//   },
// };

// // Change code above this line

// console.log(atTheOldToad.addPotion({ name: "Power potion", price: 270 }));

// Задача 4-6 (ForEach)

// function filterArray(numbers, value) {
//   const filteredNumbers = [];
//   // Change code below this line

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // for (let i = 0; i < numbers.length; i += 1) {
//   //   if (numbers[i] > value) {
//   //     filteredNumbers.push(numbers[i]);
//   //   }
//   // }

//   // Change code above this line
//   return filteredNumbers;
// }

// TASK 4 - 7 forEach

// function getCommonElements(firstArray, secondArray) {
//   const commonElements = [];
//   // Change code below this line
//   firstArray.forEach((firstArr) => {
//     if (secondArray.includes(firstArr)) {
//       commonElements.push(firstArr);
//     }
//   });
//   // for (let i = 0; i < firstArray.length; i += 1) {
//   //   if (secondArray.includes(firstArray[i])) {
//   //     commonElements.push(firstArray[i]);
//   //   }
//   // }

//   return commonElements;
//   // Change code above this line
// }
// getCommonElements([1, 2, 3], [2, 4]);
// getCommonElements([1, 2, 3], [2, 1, 17, 19]);
// getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27]);
// getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40]);
// getCommonElements([1, 2, 3], [10, 20, 30]);

// TASK 4-8 => function

// Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem;
// };

// // function calculateTotalPrice(quantity, pricePerItem) {
// //   // Change code above this line
// //   return quantity * pricePerItem;
// // }
// console.log(calculateTotalPrice(5, 100));

// TASK 4-9 => function (explicit return)/(implicit return)

// Change code below this line
// const calculateTotalPrice = (quantity, pricePerItem) => {
//   return quantity * pricePerItem; // => explicit return
// };
// const calculateTotalPrice = (quantity, pricePerItem) => quantity * pricePerItem; // => implicit return
// Change code above this line

// TASK 4-10 => function - callback
// Change code below this line
// function calculateTotalPrice(orderedItems) {
// let totalPrice = 0;
//   orderedItems.forEach(function (item) {
//     totalPrice += item;
//   });

//   return totalPrice;
// }
// SOLVING
// const calculateTotalPrice = (orderedItems) => {
//   let totalPrice = 0;

//   orderedItems.forEach((item) => {
//     totalPrice += item;
//   });

//   return totalPrice;
// };
// Change code above this line

// TASK 4-11 => function - callback

// Change code below this line
// function filterArray(numbers, value) {
//   const filteredNumbers = [];

//   numbers.forEach(function (number) {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });
// return filteredNumbers;
// };

// SOLVING
// const filterArray = (numbers, value) => {
//   const filteredNumbers = [];

//   numbers.forEach((number) => {
//     if (number > value) {
//       filteredNumbers.push(number);
//     }
//   });

//   // Change code above this line
//   return filteredNumbers;
// };

// TASK 4-13 pure function

// function changeEven(numbers, value) {
//   // Change code below this line

//   for (let i = 0; i < numbers.length; i += 1) {
//     if (numbers[i] % 2 === 0) {
//       numbers[i] = numbers[i] + value;
//     }
//   }
//   // Change code above this line
// }
// SOLVING

// function changeEven(numbers, value) {
//   // Change code below this line
//   const newNumbers = [];
//   let pushedNumber = 0;
//   numbers.forEach((number) => {
//     if (number % 2 === 0) {
//       pushedNumber = number + value;
//       newNumbers.push(pushedNumber);
//     } else {
//       newNumbers.push(number);
//     }
//   });
//   return newNumbers;
//   // Change code above this line
// }

const getUsersWithEyeColor = (users, color) => {
  users.filter((user) => user.eyeColor === color);
  console.log(user);
};
