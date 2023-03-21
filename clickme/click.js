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