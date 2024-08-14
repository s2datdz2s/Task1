function mostFrequentStringLengths(strings) {
    const lengthFrequency = {};
    const result = [];

// Count the frequency of each long string
        strings.forEach(str => {
        const len = str.length;
        lengthFrequency[len] = (lengthFrequency[len] || 0) + 1;
    });

// Find the largest frequency
    const maxFrequency = Math.max(...Object.values(lengthFrequency));

// Filter out the strings with the most frequent occurrences
    strings.forEach(str => {
        if (lengthFrequency[str.length] === maxFrequency) {
            result.push(str);
        }
    });

    return result;
}

//input 1
const inputStrings1 = ['a', 'ab', 'abc', 'cd', 'def', 'gh'];
const outputStrings1 = mostFrequentStringLengths(inputStrings1);
console.log(outputStrings1); // ['ab', 'cd', 'gh']

//input 2
const inputStrings2 = ['one', 'two', 'three', 'four', 'five', 'six'];
const outputStrings2 = mostFrequentStringLengths(inputStrings2);
console.log(outputStrings2); // ['one', 'two', 'six']

//input 3
const inputStrings3 = ['apple', 'banana', 'pear', 'kiwi', 'plum', 'peach'];
const outputStrings3 = mostFrequentStringLengths(inputStrings3);
console.log(outputStrings3); // ['pear', 'kiwi', 'plum']

//input 4
const inputStrings4 = ['short', 'tiny', 'medium', 'average', 'longish', 'minuscule'];
const outputStrings4 = mostFrequentStringLengths(inputStrings4);
console.log(outputStrings4); // [ 'average', 'longish' ]
