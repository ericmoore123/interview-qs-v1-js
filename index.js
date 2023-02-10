// Q1 Valid Anagram, given two strings, check if they're anagrams
// They are anagrams if they have the same letters with the same frequency.
const anagrams = (s1, s2) => {
    s1.length !== s2.length ? false : null;
    if (s1.split('').sort().join('') !== s2.split('').sort().join('')) return false;
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
    arr.includes(targetVal) ? returnedArr.push(arr.lastIndexOf(targetVal)) : returnedArr = [val1, val1]

    return returnedArr;
};
// console.log(firstAndLastIndex([5, 2, 3, 2, 6], 1));
// console.log(firstAndLastIndex([5, 2, 3, 2, 3, 1], 9));
// console.log(firstAndLastIndex([5, 2, 4, 2, 6, 5, 23, 11, 9], 0));

// Q3 Find the kth largest element of an array
const kthLargestEl = (arr, k) => {
    if (arr.length < k) return 'Array not long enough';
    // Sort array smallest to largest and reverse it
    arr = arr.sort((a, b) => a - b).reverse();
    // Send the number at that target value
    return arr[k - 1];
};
// console.log(kthLargestEl([1, 2, 3, 4, 3, 4, 3, 9, 21, 14, 3, 8, 1], 4));

//Q4 Given an array, remove values provided and return new array 
const removeValues = (arr, ...vals) => {
    // Copy arr so indexes stay consistent
    let newArr = [...arr];
    // Loop over vals to remove 
    for(let i = 0; i < vals.length; i++){
        // set new array to an array without values you want to remove
        newArr = newArr.filter(el => el !== vals[i]);
    };

    return newArr;
}

console.log(removeValues([1, 2, 3, 2, 6, 5, 9, 2, 1, 4], 1, 2, 9))
console.log(removeValues([8,3,9,10,28,3,4,12,1,6], 8,1,3,12))
