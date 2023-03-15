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

// sort by sold
function compareSold(colaA, colaB) {
    if (colaA.sold > colaB.sold) {
        return 1;
    } else if (colaA.sold === colaB.sold) {
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
printProducts(products);