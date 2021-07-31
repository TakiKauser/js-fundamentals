var friends = ["arefin", "khairul", "rafsan", "mahfuz", "chamak", "didi"];

// add elements to an array
friends.push("taki");
friends.push("kauser", "badhon");
console.log(friends);

// remove an elements from an array
friends.pop();
var lastItem = friends.pop();
console.log(friends);
console.log(lastItem);

// add an element in the begining of an array in js
friends.unshift("arefin");
console.log(friends);
// remove first element of an array in 
firstElement = friends.shift();
console.log(firstElement);