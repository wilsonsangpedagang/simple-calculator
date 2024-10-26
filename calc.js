// This script manages a simple calculator's display and operations.
// It provides functions to append input to the display, calculate the result of the expression,
// and clear the display in case of user input or errors.

// Reference to the display element (input field) where calculations are shown
const display = document.getElementById("display");

// Function to append input (numbers/operators) to the display
function displayed(input) {
    display.value += input; // Append the input to the display
}

// Function to evaluate the expression in the display using eval()
// If the expression is valid, it updates the display with the result,
// otherwise it catches any errors and displays "Error"
function calculate() {
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error"; // Display "Error" if evaluation fails
    }
}

// Function to clear the display, resetting it to an empty state
function clearing() {
    display.value = ""; // Clear the display value
}