const makePhrases = () => {
    let words1 = ['24/7', 'multi-tier', '30000 foot', 'B-to-B'];
    let words2 = ['empowered', 'value-added', 'oriented', 'focused', 'aligned'];
    let words3 = ['process', 'solution', 'tipping-point', 'strategy', 'vision'];

    let rand1 = Math.floor(Math.random() * words1.length);
    let rand2 = Math.floor(Math.random() * words2.length);
    let rand3 = Math.floor(Math.random() * words3.length);

    let phrase = words1[rand1] + ' ' + words2[rand2] + ' ' + words3[rand3];
    alert(phrase);
}
makePhrases();

// bubblegum array

let products = ['choo choo chocolate', 'icy mint', 'cake batter', 'bubblegum'];
let hasBubbleGum = [false, false, false, true];
let i = 0;
while (i < hasBubbleGum.length) {
    if (hasBubbleGum[i]) {
        console.log(products[i] + ' contains bubble gum');
    };
    i = i + 1;
};