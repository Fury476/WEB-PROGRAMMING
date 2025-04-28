// This script calculates the total cost of petrol based on cost per liter and liters purchased.

const costPerLiterInput = document.getElementById('costPerLiter'); // Selects the input field for cost per liter
const litersInput = document.getElementById('liters'); // Selects the input field for liters purchased
const calculateBtn = document.getElementById('calculateBtn'); // Selects the button to trigger calculation
const result = document.getElementById('result'); // Selects the paragraph to display the result

calculateBtn.addEventListener('click', calculateTotal); // Adds a click event listener to the button to run calculateTotal

function calculateTotal() {
    const costPerLiter = parseFloat(costPerLiterInput.value); // Gets and converts cost per liter input to a number
    const liters = parseFloat(litersInput.value); // Gets and converts liters input to a number
    const total = costPerLiter * liters; // Calculates total cost by multiplying cost per liter by liters
    result.textContent = `Total Cost: £${total.toFixed(2)}`; // Updates the result text with total cost, formatted to 2 decimal places
}

calculateTotal(); // Runs the function once on page load to show initial result with default values

