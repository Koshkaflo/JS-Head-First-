const scores = [60, 50, 60, 58, 54, 54, 58, 69, 52, 54, 48, 69, 34, 55, 66, 61, 44, 53, 18, 31];
let highScore = 0;
let output;
for (let i = 0; i < scores.length; i++) {
    output = 'Bubble solution #' + i + ' score: ' + scores[i];
    console.log(output);
    if (scores[i] > highScore) {
        highScore = scores[i];
    };
};
console.log('Bubbles tests: ' + scores.length);
console.log('Highest bubble score: ' + highScore);

let bestSolutions = [];
for (let i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
        bestSolutions.push(i);
    };
};
console.log('Solutions with the highest score: ' + bestSolutions);