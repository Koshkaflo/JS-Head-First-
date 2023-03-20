function makeCounter() {
    let count = 0;

    function counter() {
        count +=1;
        return count;
    };
    return counter;
};

let doCount = makeCounter();

console.log(doCount());
console.log(doCount());
console.log(doCount());

function makePassword(password) {
    return function guess (passwordGuess) {
        return (passwordGuess === password);
    };
};

function multN(n) {
    return function multM(m) {
        return m * n;
    };
};

function makeCounter() {
    let count = 0;
    return {
        increment: function() {
            count++;
            return count;
        },
    };
};