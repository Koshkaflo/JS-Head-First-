let passengers = [
    {name: 'Jane Doloop', paid: true, ticket: 'coach'},
    {name: 'Dr.Evel', paid: true, ticket: 'firstclass'},
    {name: 'Sue Property', paid: false, ticket: 'firstclass'},
    {name: 'John Funcall', paid: true, ticket: 'premium'}
    ];
    
//passenger enumeration function
function processPassengers(passengers, testFunction) {
    for (let i = 0; i < passengers.length; i++) {
        if (testFunction(passengers[i])) {
        return false;
        };
    };
    return true;
};
    
//check passengers in fly-list
function checkNoFlyList(passenger) {
    return (passenger.name === 'Dr.Evel');
};

//chek paid tikets
function checkNotPaid(passenger) {
    return (!passenger.paid);
};

//on the fly-list or not
let allCanFly = processPassengers(passengers, checkNoFlyList);
    if (!allCanFly) {
      console.log('The plane can`t take off: we have a passenger on the no-fly-list.')
    };
    
//anybody has not paid?
let allPaid = processPassengers(passengers, checkNotPaid);
    if(!allPaid) {
      console.log('The plane can`t take off: not everyone has paid.')
    };
    
//paid or not paid passenger
function printPassenger(passenger) {
    let message = passenger.name;
    if (passenger.paid === true) {
        message = message + ' has paid';
    } else {
        message = message + ' has not paid';
    };
    console.log(message);
    return false;
};
    
processPassengers(passengers, printPassenger);

//function of drink choice
function createDrinkOrder(passenger) {
    let orderFunction;
    if (passenger.ticket === 'firstclass') {
        orderFunction = function() {
            alert('Would you like a coctail or wine?')
        };
    } else if (passenger.ticket === 'premium') {
        orderFunction = function() {
            alert('Would you like wine, cola or water?')
        };
    } else {
        orderFunction = function() {
            alert('Your choice is cola or water.')
        };
    };
    return orderFunction;
};

//function of dinner choice
function createDinnerOrder(passenger) {
    let orderFunction;
    if (passenger.ticket === 'firstclass') {
        orderFunction = function() {
            alert('Would you like chicken or pasta?')
        };
    } else if (passenger.ticket === 'premium') {
        orderFunction = function() {
            alert('Would you like a snackbox or cheese plate?')
        };
    } else {
        orderFunction = function() {
            alert('Would you like peanuts or pretzels?')
        };
    };
    return orderFunction;
};
    

//serve customer 
function serveCustomer(passenger) {
    let getDrinkOrderFunction = createDrinkOrder(passenger);
    let getDinnerOrderFunction = createDinnerOrder(passenger);
    getDrinkOrderFunction();
    getDinnerOrderFunction();
    getDrinkOrderFunction();
    getDrinkOrderFunction();
    //switch on movie
    getDrinkOrderFunction();
    //pick up trash
};

//passenger serve enumeration function
function servePassengers(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        serveCustomer(passengers[i]);
    };
};

servePassengers(passengers);