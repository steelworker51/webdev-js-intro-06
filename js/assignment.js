"use strict";

const submissionBtn = document.getElementById("submission-btn"); //Retrieves the button element with the ID submission-btn, which will trigger the functions when clicked.
const evenOrOddElement = document.getElementById("even-or-odd"); //Retrieves an element where the result of checking if a number is even or odd will be displayed.
const sumTheNumbersElement = document.getElementById("sum-the-numbers"); //Retrieves an element where the sum of numbers from 1 to 10 will be displayed.
const createNumberArrayElement = document.getElementById("create-number-array"); //Retrieves an element where an array of numbers from 1 to 10 will be displayed.

function evenOrOdd() { //It uses the modulus operator (%) to divide num by 2. If the remainder is 0, the number is even, otherwise, it's odd.
    const num = 3; 
    if (num % 2 === 0) {
        evenOrOddElement.innerText = "Even";
    } else {
        evenOrOddElement.innerText = "Odd";
    }
}

function sumTheNumbers() { //It initializes a sum variable to 0.
    //Then, it loops through the numbers from 1 to 10 using a for loop, adding each number to the sum variable.
    let sum = 0;
    
    for (let i = 1; i <= 10; i++) {
        sum += i;
    }
    sumTheNumbersElement.innerText = sum;
}

function createNumberArray() {  //It initializes an empty array numberArray.
    //Then, it uses a for loop to add each number from 1 to 10 to the array using the push() method.
    //After the loop, it converts the array into a comma-separated string using join(','),
    const numberArray = [];
 
    for (let i = 1; i <= 10; i++) {
        numberArray.push(i);
    }
    createNumberArrayElement.innerText = numberArray.join(',');
}

function render() {
    evenOrOdd();
    sumTheNumbers();
    createNumberArray();
}

submissionBtn.addEventListener("click", function () {
    render();
});

