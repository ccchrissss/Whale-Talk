var input = 'My name Mac Miller, who the ballz are you!?';

// var input = 'turpentine and turtles';

const vowels = ['a', 'e', 'i', 'o', 'u'];

var resultsArray = [];

// console.log(input.length);

for (let i = 0; i < input.length; i++) {
   const inputChar = input[i];

    if (inputChar === 'e') {
        resultsArray.push(input[i]);
    };

    if (inputChar === 'u') {
        resultsArray.push(input[i])
    };
   
    // console.log(i, 'outer');

    for (let j = 0; j < vowels.length; j++) {
        const inputVowels = vowels[j];

        // console.log(j, 'inner');
        
        if (inputChar === inputVowels) {
            // console.log(inputChar);
            resultsArray.push(inputChar);
        };
    };
};

// console.log(resultsArray);

const resultString = resultsArray.join('').toUpperCase();

console.log(resultString);
