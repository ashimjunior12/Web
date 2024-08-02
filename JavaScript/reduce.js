// .reduce is a higher order function that takes two parameters, one is callback function and 
// another is initial value/accumulator
// callback function takes two parameters, one is accumulator and another is current item from the array
// it allows to iterate over the array and accumulate to a single value based on those elements

const numbers = [1,2,3,4,5,6,7,8,9,10];
sum = numbers.reduce((accumulator, currentItem) => accumulator+currentItem, 0);  // the initial value of accu-
// mulator will be set to 0, if it was set to 1, then the initial value of accumulator will set to one and the re-
// sult will be different
console.log(sum);
