window.onload = init;

function init() {
    let images = document.getElementsByTagName('img');
    for (let i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
    };
};

function showAnswer(eventObj) {
    let image = eventObj.target;
    let name = image.id;
    name = 'pics/' + name + '.jpg';
    image.src = name;
};


//timer for alert 5sec
function timerHandler() {
    alert ('Click on any poster! Don`t sit there staring at a blank screen!');
};
setTimeout(timerHandler, 5000);
