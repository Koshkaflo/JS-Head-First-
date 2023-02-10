// функция вывода списка результатов и нахождение значения самого высокого показателя
const scores = [60, 50, 60, 58, 54, 54, 58, 69, 52, 54, 48, 69, 34, 55, 66, 61, 44, 53, 18, 31];
const printAndGetHighScore = (scores) => {
    let highScore = 0;
    let output;
    for (let i = 0; i < scores.length; i++) {
    output = 'Bubble solution #' + i + ' score: ' + scores[i];
    console.log(output);
        if (scores[i] > highScore) {
        highScore = scores[i];
        };
    };
return highScore;
};

// функция нахождения списка индексов высоких показателей
const getBestResults = (scores, highScore) => {
    let bestSolutions = [];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            bestSolutions.push(i);
        };
    };
    return bestSolutions;
};

let highScore = printAndGetHighScore(scores);
console.log('Bubbles tests: ' + scores.length);
console.log('Highest bubble score: ' + highScore);

let bestSolutions = getBestResults(scores, highScore);
console.log('Solutions with the highest score: ' + bestSolutions);

// функция определения индекса образца с максимальным результатом при минимальных затратах
const costs =[.20, .35, .23, .28, .34, .24, .28, .27, .32, .34, .38, .28, .24, .35, .26, .21, .24, .33, .28, .21];
const getMostCostEffectiveSolution = (scores, costs, highScore) => {
    let cost = 100;
    let index;
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            if (cost > costs[i]) {
                index = i;
                cost = costs[i];
            };
        };
    };
    return index;
};
let mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log('Bubble solution #' + mostCostEffective + ' is the most cost effective');