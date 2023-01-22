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