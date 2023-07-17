// Create an array of pizzaToppings with at least four different toppings
const pizzaToppings = ['pepperoni', 'mushrooms', 'onions', 'bell peppers'];

// Create a greetCustomer function that welcomes a guest and informs them of the available toppings
function greetCustomer() {
  console.log(`Welcome to Pizza House, our toppings are: ${pizzaToppings.join(', ')}`);
}

// Create a getPizzaOrder function that takes size, crust, and an indefinite amount of toppings as inputs
function getPizzaOrder(size, crust, ...toppings) {
  console.log(`One ${size} ${crust} crust pizza with ${toppings.join(', ')} coming up!`);
  return [size, crust, toppings];
}

// Create a preparePizza function that takes an array with size, crust, and toppings
function preparePizza(pizzaDetails) {
  console.log('...Cooking pizza...');
  const [size, crust, toppings] = pizzaDetails;
  return {
    size: size,
    crust: crust,
    toppings: toppings
  };
}

// Create a servePizza function that takes a pizza Object
function servePizza(pizza) {
  console.log(`Order up! Here's your ${pizza.size} ${pizza.crust} crust pizza with ${pizza.toppings.join(', ')}... Enjoy!`);
  return pizza;
}

// Call each function and use the returned value from the previous function as its input
greetCustomer();
const pizzaOrderDetails = getPizzaOrder('large', 'thick', 'pepperoni', 'mushrooms');
const pizza = preparePizza(pizzaOrderDetails);
servePizza(pizza);


// bonous challange