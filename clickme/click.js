//no closure
/*
let count = 0;

window.onload = function() {
    let button = document.getElementById('clickme');
    button.onclick = handleClick;
};

function handleClick() {
    let message = 'You clicked me ';
    let div = document.getElementById('message');
    count++;
    div.innerHTML = message + count + ' times!';
};
*/

window.onload = function() {
    let count = 0;
    let message = 'You clicked me ';
    let div = document.getElementById('message');
    let button = document.getElementById('clickme');
    button.onclick = function () {
        count++;
        div.innerHTML = message + count + ' times';
    };
}