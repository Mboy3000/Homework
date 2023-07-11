const { type } = require("os");

let pizzaPlace="Maxwell's Family Pizza";
let numberOfToppings=100;


console.log(pizzaPlace+ "has the best pizza with over " + numberOfToppings  + " to choose from")
console.log(typeof(pizzaPlace));
console.log(typeof(numberOfToppings));



if ( numberOfToppings<10){
    console.log("Quality over quanity");
}
else{
    console.log("A whole lot of pizza!");
}
// this is a commit that I should push this into my github rep/ 
for( let numberOfToppings=1;numberOfToppings <= 10; numberOfToppings++){
    if(numberOfToppings%2===0){
        console.log(numberOfToppings);
    }
}
