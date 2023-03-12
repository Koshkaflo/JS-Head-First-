window.onload = init;
function init() {
    let image = document.getElementById('blur');
    image.onclick = showAnswer;
};
function showAnswer() {
    let image = document.getElementById('blur');
    image.src = 'poster.jpg';
}