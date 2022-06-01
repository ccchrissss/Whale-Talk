var input = 'My name Mac Miller, who the ballz are you!?';

const vowels = ['a', 'e', 'i', 'o', 'u'];

var resultsArray = [];

// console.log(input.length);

for (let i = 0; i < input.length; i++) {
//    const inputChar = input[i];

    // if (inputChar === 'e') {
    if (input[i] === 'e') {
        resultsArray.push(input[i]);
    };

    // if (inputChar === 'u') {
    if (input[i] === 'u') {
        resultsArray.push(input[i])
    };
   
    // console.log(i, 'outer');

    for (let j = 0; j < vowels.length; j++) {
        // const inputVowels = vowels[j];

        // console.log(j, 'inner');
        
        // if (inputChar === inputVowels) {
        if (input[i] === vowels[j]) {
            // console.log(inputChar);
            // resultsArray.push(inputChar);
            resultsArray.push(input[i])
        };
    };
};

// console.log(resultsArray);

// var resultString = resultsArray.map(element => {
//     return element.toUpperCase();

// }

// );


const resultString = resultsArray.join('').toUpperCase();

console.log(resultString);
