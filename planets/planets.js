function init() {
let planet = document.getElementById('greenplanet');
planet.innerHTML = 'Red Alert: hit by phaser fire!';
planet.setAttribute('class', 'redtext');
};

window.onload = init;


//about types of data
if (99 == '99') {
    console.log('A number equals a string');
} else {
    console.log('No way a number equals a string');
};