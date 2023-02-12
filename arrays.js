// Q1 Valid Anagram, given two strings, check if they're anagrams

const { CleaningServices } = require("@mui/icons-material");

// They are anagrams if they have the same letters with the same frequency.
const anagrams = (s1, s2) => {
    s1.length !== s2.length ? false : null;
    if (s1.split("").sort().join("") !== s2.split("").sort().join(""))
        return false;
    return true;
};
// console.log(anagrams('garden', 'danger'));
// console.log(anagrams('pore', 'rope'));
// console.log(anagrams('naxis', 'faxis'));

// Q2 first and last index in a sorted array
const firstAndLastIndex = (arr, target) => {
    if (target >= arr.length) return [-1, -1]; // Check arr are target work together

    // Set changing vals
    let returnedArr = [];
    let targetVal = arr[target];

    // Set first position and delete from array
    returnedArr.push(arr.indexOf(targetVal));
    delete arr[arr.indexOf(targetVal)];

    // Check if val is still present in arr, if it is append last pos, if not use first pos twice
    arr.includes(targetVal)
        ? returnedArr.push(arr.lastIndexOf(targetVal))
        : (returnedArr = [val1, val1]);

    return returnedArr;
};
// console.log(firstAndLastIndex([5, 2, 3, 2, 6], 1));
// console.log(firstAndLastIndex([5, 2, 3, 2, 3, 1], 9));
// console.log(firstAndLastIndex([5, 2, 4, 2, 6, 5, 23, 11, 9], 0));

// Q3 Find the kth largest element of an array
const kthLargestEl = (arr, k) => {
    if (arr.length < k) return "Array not long enough";
    // Sort array smallest to largest and reverse it
    arr = arr.sort((a, b) => a - b).reverse();
    // Send the number at that target value
    return arr[k - 1];
};
// console.log(kthLargestEl([1, 2, 3, 4, 3, 4, 3, 9, 21, 14, 3, 8, 1], 4));

// Q4 Given an array, remove values provided and return new array
const removeValues = (arr, ...vals) => {
    // Copy arr so indexes stay consistent
    let newArr = [...arr];
    // Loop over vals to remove
    for (let i = 0; i < vals.length; i++) {
        // set new array to an array without values you want to remove
        newArr = newArr.filter((el) => el !== vals[i]);
    }

    return newArr;
};
// console.log(removeValues([1, 2, 3, 2, 6, 5, 9, 2, 1, 4], 1, 2, 9))
// console.log(removeValues([8, 3, 9, 10, 28, 3, 4, 12, 1, 6], 8, 1, 3, 12))

// Q5 Return a duplicate free array
const duplicateFree = (arr) => {
    // OTHER SOLUTIONS
    const unique = (array) => Array.from(new Set(array));
    return unique;

    // const unique2 = (array) => array.filter((element, id) => array.indexOf(element) === id);
    // return unique2
};
// console.log(duplicateFree([1, 2, 23, 5, 4, 3, 23, 1, 4, 3]));
// console.log(duplicateFree([1,4,22,1,6,3,2,7,3,6,43,6,2,12,3]));

// Q6 compare two arrays and return if they are equal
const isEqual = (arr1, arr2) => {
    if (arr1.length !== arr2.length) return false;

    // Convert js value to a json string then compare and return boolean value
    return JSON.stringify(arr1) === JSON.stringify(arr2);
};
// console.log(isEqual([1,2,3,4,5,6], [1,2,3,4,5,6]));
// console.log(isEqual([3,4,2,6], [1,2,3,4]));

// Q7 Turn a deep array into a plain array
// Array.isArray(valueToTest);
const plainArray = (arr) => {
    // Join array items with a comma to remove all inner arrays and create a string with each
    // item seperated by a comma. Then, join the strings into an array at each comma.
    let newArr = arr.join(",").split(",");
    // Parse the array and convert each element from string to integer and return it (map)
    return newArr.map((el) => parseInt(el));
};
// console.log(plainArray([1,2,3,[4,55,[6,5, [2,9]],[2]],7]));
// console.log(plainArray([1,2,3,[4,55,[6,5]]]));

// Q8 Write a method that splits an array into parts of determined size
const chunks = (arr, size) => {
    let newArr = [];
    let temp = [];
    console.log(arr.indexOf(size));
};
// console.log(chunks([1, 2, 3, 4, 5, 6, 7], 2));
// console.log(chunks([1, 2, 3, 4, 5, 6, 7], 4));

// Q9 Check if input is an array or not
const isArr = (arr) => {
    return Array.isArray(arr);
};
// console.log(isArr([1,2,3,4]));
// console.log(isArr('2'));
// console.log(isArr(1));

// Q10 Get the first element of an array OR by Passing a parameter 'n' will return the first
// 'n' elements of the array.
// Slice adds/removes items and generates a new array of those items
// Splice removes/adds to the original array and returns it
const firstOrMore = (arr, num) => {
    if (num === undefined) return arr[0];
    if (num >= arr.length) return arr;
    else return arr.slice(0, num);
};
// console.log(firstOrMore([1,2,3,4]));
// console.log(firstOrMore([1,2,3,4], 3));
// console.log(firstOrMore([1,2,3,4], 13));

// Q11 Get the last element of an array OR by Passing a parameter 'n' will return the last
// 'n' elements of the array.
const lastOrMore = (arr, num) => {
    if (num === undefined) return arr[arr.length - 1];
    if (num >= arr.length) return arr;
    // Slice will defautl to the rest fo the array if only given a starting point
    else return arr.slice(arr.length - num);
};
// console.log(lastOrMore([1,2,3,4]));
// console.log(lastOrMore([1,2,3,4,5,6,7,8], 4));
// console.log(lastOrMore([1,2,3,4,5,6,7,8,9,10], 8));

// Q12 Join all elements of an array together int oa string
const joinToString = (arr) => {
    return arr.join(", ");
};
// console.log(joinToString(['Eric', 'loves', 'chicken', 'nuggets']));

// Q13 A function that swaps the case of each letter of an entered string
const swapCase = (word) => {
    let wordArr = word.split("");
    let swapArr = [];
    // for(let i = 0; i < wordArr.length; i++) {
    //     if(wordArr[i] == wordArr[i].toUpperCase()){
    //         swapArr.push(wordArr[i].toLowerCase());
    //     }else{
    //         swapArr.push(wordArr[i].toUpperCase());
    //     }
    // };

    for (item in wordArr) {
        wordArr[item] == wordArr[item].toUpperCase()
            ? swapArr.push(wordArr[item].toLowerCase())
            : swapArr.push(wordArr[item].toUpperCase());
    }
    return swapArr.join("");
};
// console.log(swapCase("EricMooreApplesBees"));
// console.log(swapCase("JjiJJjJSIJodhIDIkBNOIUHob"));

// Q14 given two arrays, combine them (union)
const unionArrays = (arr1, arr2) => {
    // Create a copy of the passed arrays into one array
    let newArr = [...arr1, ...arr2];
    // Sort array from min to max (not a required step if using Sets)
    // newArr.sort((a,b) => a-b);
    // Convert to set to sort and remove duplicates
    newArr = new Set(newArr);
    // Convert back to array for final return value
    return Array.from(newArr);
};
// console.log(unionArrays([1,2,3,1,3,4,4], [5,5,7,4,4,6,1,2]));

// Q15 Merge two arrays and remove all duplicates
const mergeAndRemove = (arr1, arr2) =>{
    // Concatinate the two arrays
    let merged = arr1.concat(arr2);
    // Create a set out of the arrays to remove duplicates (also sorts elements)
    merged = new Set(merged);
    // Transform set into array and return 
    merged = Array.from(new Set(merged));
    return merged;
};
console.log(mergeAndRemove([1,2,3,4], [1,3,4,5,6,7]));
console.log(mergeAndRemove([1,2,3,4], [1,3,4,5,6,7]));
