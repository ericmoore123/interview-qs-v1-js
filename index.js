// Q1 Valid Anagram, given two strings, check if they're anagrams
// They are anagrams if they have the same letters with the same frequency.
const anagrams = (s1, s2) => {
    s1.length !== s2.length ? false : null;
    if(s1.split('').sort().join('') !== s2.split('').sort().join('')) return false;
    return true;
};

console.log(anagrams('garden', 'danger'));
console.log(anagrams('pore', 'rope'));
console.log(anagrams('naxis', 'faxis'));
