let products = [
    {name: 'grapefruit', calories: 170, color: 'red', sold: 8200},
    {name: 'orange', calories: 160, color: 'orange', sold: 12101},
    {name: 'cola', calories: 210, color: 'caramel', sold: 25412},
    {name: 'diet cola', calories: 0, color: 'caramel', sold: 43922},
    {name: 'lemon', calories: 200, color: 'clear', sold: 14983},
    {name: 'raspberry', calories: 180, color: 'pink', sold: 9427},
    {name: 'root beer', calories: 200, color: 'caramel', sold: 9909},
    {name: 'water', calories: 0, color: 'clear', sold: 62123},
];

// compare sold
function compareSold(colaA, colaB) {
    if (colaA.sold > colaB.sold) {
        return 1;
    } else if (colaA.sold === colaB.sold) {
        return 0;
    } else {
        return -1;
    };
};

// compare name
function compareName(colaA, colaB) {
    if (colaA.name > colaB.name) {
        return 1;
    } else if (colaA.name === colaB.name) {
        return 0;
    } else {
        return -1;
    };
};

// compare calories
function compareCalories(colaA, colaB) {
    if (colaA.calories > colaB.calories) {
        return 1;
    } else if (colaA.calories === colaB.calories) {
        return 0;
    } else {
        return -1;
    };
};

// compare color
function compareColor(colaA, colaB) {
    if (colaA.color > colaB.color) {
        return 1;
    } else if (colaA.color === colaB.color) {
        return 0;
    } else {
        return -1;
    };
};

// print list pf products
function printProducts (products) {
    for ( let i = 0; i < products.length; i++) {
        console.log('Name: ' + products[i].name + ', Calories: ' + products[i].calories + ', Color: ' + products[i].color + ', Sold: ' + products[i].sold);    
    };
};

products.sort(compareSold);
console.log('Products sorted by sold:')
printProducts(products);

products.sort(compareName);
console.log('Products sorted by name:')
printProducts(products);

products.sort(compareCalories);
console.log('Products sorted by calories:')
printProducts(products);

products.sort(compareColor);
console.log('Products sorted by color:')
printProducts(products);