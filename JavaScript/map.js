// We can iterate over an array using map();
// forEach() method doesnot return anything but this method iterates over an array and also returns a new array
// Size of new array will be the same as the size of orginal array
// It uses values from orginal array while making a new array


const arr = [1,2,3,4,5];

newArr = arr.map(function(number){
    console.log(number);
    return number *2;
});
console.log(arr);
console.log(newArr);