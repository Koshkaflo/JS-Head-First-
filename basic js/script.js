// переменные

setTimeout(wakeUpUser, 5000);
function wakeUpUser() {
    alert("Are you going to stare at this boring page forever?");
}

// цикл While

let scoops = 5;
while (scoops > 0) {
    document.write("Another scoop!<br>");
    scoops = scoops - 1;
}
document.write("Life without ice cream isn't the same<br>");

let i = 0;
let name1 = "Joe";
while (i < 2) {
    document.write("Happy Birthday to you. <br>");
    i = i + 1;
}
document.write("Happy Birthday dear" + name1 + ", <br>");
document.write("Happy Birthday to you. <br>");

//console.log

var word = "bottles";
var count = 99;
while (count > 0) {
    console.log(count + " " + word + " of bear on the wall");
    console.log(count + " " + word + " of bear,");
    console.log("Take one down, pass it around,");
    count = count - 1;
    if (count > 0) {
        console.log(count + " " + word + " of beer on the wall.");
    } else {
        console.log("No more " + word + " of beer on the wall.");
    }

}



// function bark

function bark(name, weight) {
    if (weight > 20) {
        console.log(name + ' says WOOF WOOF');
    } else {
        console.log(name + ' says woof woof');
    }
}

bark('rover', 23);
bark('spot', 13);
bark('spike', 53);
bark('lady', 17);

// function whatShallWear

function whatShallWear(temp) {
    if (temp < 60) {
        console.log('Wear a jacket');
    } else if (temp < 70) {
        console.log('Wear a sweather');
    } else {
        console.log('Wear a t-shirt');
    }
}

whatShallWear(50);
whatShallWear(80);
whatShallWear(60);

// function calculateArea

function calculateArea(r) {
    let area;
    if (r <= 0) {
        return 0;
    } else {
        area = Math.PI * r * r;
        return area;
    }
}
let radius = 5.2;
let theArea = calculateArea(radius);
console.log("The area is: " + theArea);




// function clunk

function clunk(times) {
    let num = times;
    while (num > 0) {
        display('clunk');
        num = num - 1;
    }
}

// function thingamajig

function thingamajig(size) {
    let facky = 1;
    clunkCounter = 0;
    if (size == 0) {
        display('clank');
    } else if (size == 1) {
        display('thunk');
    } else {
        while (size > 1) {
            facky = facky * size;
            size = size - 1;
        }
        clunk(facky);
    }
}

// function display

function display(output) {
    console.log(output);
    clunkCounter = clunkCounter + 1;
}
let clunkCounter = 0;
thingamajig(5);
console.log(clunkCounter);

// данный код вычисляет факториал(подсчет комбинаций из полученного количества).
// если передать чиисло 5, на консоль 120 раз выводится сообщение "clunk", после чего выводится число 120