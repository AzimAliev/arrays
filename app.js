const strings = ["a", "b", "c", "d"];
const numbers = [1, 2, 3, 4, 5];
// Variable array is somewhere in memory and the computer knows it.
// When I do array[2], i'm telling the computer, hey go to the array and grab the 3rd item from where the array is stored.

//push
strings.push("e"); // add after the last array

//pop
strings.pop(); // deletes the last array

//unshift
strings.unshift("x"); // O(n) // ['x', 'a', 'b', 'c', 'd'];

//splice
strings.splice(2, 0, "alien"); // O(n) // ['x', 'a', 'alien', 'b', 'c', 'd'];

console.log(strings);
