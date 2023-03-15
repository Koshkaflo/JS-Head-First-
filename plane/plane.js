let passengers = [
    {name: 'Jane Doloop', paid: true},
    {name: 'Dr.Evel', paid: true},
    {name: 'Sue Property', paid: false},
    {name: 'John Funcall', paid: true}
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