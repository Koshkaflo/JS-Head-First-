let passengers = [
    {name: 'Jane Doloop', paid: true, ticket: 'coach'},
    {name: 'Dr.Evel', paid: true, ticket: 'firstclass'},
    {name: 'Sue Property', paid: false, ticket: 'firstclass'},
    {name: 'John Funcall', paid: true, ticket: 'coach'}
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
    } else {
        orderFunction = function() {
            alert('Your choice is cola or water.')
        };
    };
    return orderFunction;
};

//serve customer 
function serveCustomer(passenger) {
    let getDrinkOrderFunction = createDrinkOrder(passenger);
    getDrinkOrderFunction();
    //suggest lunch
    getDrinkOrderFunction();
    getDrinkOrderFunction();
    //switch on movie
    getDrinkOrderFunction();
    //pick up trash
};