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