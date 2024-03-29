class Pizza {
    constructor(size, crust, toppings, dippingSauce) {
        this.size = size;
        this.crust = crust;
        this.toppings = Array.from(toppings).map(topping => topping.value);
        this.dippingSauce = dippingSauce;
    }

    getDescription() {
        if (!this.crust) {
            return "Error: Please select a crust for your pizza.";
        }

        const toppingList = this.toppings.length > 0 ? `with ${this.toppings.join(', ')} toppings` : 'with no toppings';
        return `Thank you for ordering with us! You ordered a ${this.size}-sized pizza with ${this.crust} crust ${toppingList} and ${this.dippingSauce} dipping sauce.`;
    }
}

function placeOrder() {
    const pizzaSize = document.getElementById('pizza-size').value;
    const crust = document.querySelector('input[name="crust"]:checked');
    const toppings = document.querySelectorAll('input[name="topping"]:checked');
    const dippingSauce = document.getElementById('dipping-sauce').value;

    // Check if crust is selected
    const crustValue = crust ? crust.value : null;

    const pizzaOrder = new Pizza(pizzaSize, crustValue, toppings, dippingSauce);

    const pizzaDescription = document.getElementById('pizza-description');
    pizzaDescription.innerHTML = `<p>Order Summary: ${pizzaOrder.getDescription()}</p>`;

    const studentInfo = document.getElementById('student-info');
    studentInfo.textContent = `Student ID: 200543614 | Name: Malkit Kaur`;
}
