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
var name = "Joe";
while (i < 2) {
    document.write("Happy Birthday to you. <br>");
    i = i + 1;
}
document.write("Happy Birthday dear" + name + ", <br>");
document.write("Happy Birthday to you. <br>");