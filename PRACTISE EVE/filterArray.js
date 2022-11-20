// # Challenge 2

// Implement a function filterArray(arr) that takes an array of non-negative integers and strings and return a new array without the strings.

// # Example

//     filterArray([1, 2, "a", "b"]) to return [1,2]
//     filterArray([4, "z", "f", 5]) to return [4,5]
//     filterArray(["$%^", 567, "&&&"]) to return [567]
function filterArray(arr) {
    let newArr = arr.filter((item, i) => typeof item === "number"); 
    return newArr; 
}

console.log(filterArray([1, 2, "a", "b"]));