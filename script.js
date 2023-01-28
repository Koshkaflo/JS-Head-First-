// переменные

setTimeout(wakeUpUser, 5000);
function wakeUpUser() {
    alert("Are you going to stare at this boring page forever?");
}

// цикл While

var scoops = 5;
while (scoops > 0) {
    document.write("Another scoop!<br>");
    scoops = scoops - 1;
}
document.write("Life without ice cream isn't the same<br>");

var i = 0;
var name1 = "Joe";
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
    var area;
    if (r <= 0) {
        return 0;
    } else {
        area = Math.PI * r * r;
        return area;
    }
}
var radius = 5.2;
var theArea = calculateArea(radius);
console.log("The area is: " + theArea);