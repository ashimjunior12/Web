// .find() method returns the first instance from an array (in this case- object)
// returns undefined if no matches are found
// great for getting unique values

const arr = [
    {name:"Roman", age:25, position:"developer", id:1},
    {name:"Brook", age:24, position:"security analyst", id:2},
    {name:"John", age:25, position:"ceo", id:3},
    {name:"Smith", age:25, position:"data analyst", id:4}
];

const personality = arr.find(function(person){
    return person.id === 3;
})
console.log(personality);
console.log(typeof(personality));





// .find() method returns the first instance from an array (in this case- number)
const numbers = [1,2,3,4,5,6,7,8,9,10];
newNumber = numbers.find(function(number){
    return number===5;
});
console.log(newNumber);
console.log(typeof(newNumber));
