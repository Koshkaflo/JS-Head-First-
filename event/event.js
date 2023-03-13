window.onload = init;

function init() {
    let images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        images[i].onmouseover = showAnswer;
        images[i].onmouseout = reblur;
    };
};

function showAnswer(eventObj) {
    let image = eventObj.target;
    let name = image.id;
    name = 'pics/' + name + '.jpg';
    image.src = name;
};

function reblur(eventObj) {
    let image = eventObj.target;
    let name = image.id;
    name = 'pics/' + name + '_blur.png';
    image.src = name;
};


//timer for alert 5sec
function timerHandler() {
    alert ('Move your mouse on any poster! Don`t sit there staring at a blank screen!');
};
setTimeout(timerHandler, 5000);


function resize() {
    let element = document.getElementById('display');
    element.innerHTML = element.innerHTML + ' don`t resize the window!!!';
};
window.onresize = resize;