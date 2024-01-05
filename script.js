'use strict';

// answer-display
const tipPrice = document.getElementById("tipPrice");
const totalPrice = document.getElementById("totalPrice");

// calculation
const billInput = document.getElementById("bill");
const tipInput = document.getElementById("tip");
const ofPeopleInput = document.getElementById("ofPeople");

const tipIncreasing = document.getElementById("tipIncreasing");
const tipDecreasing = document.getElementById("tipDecreasing");
const peopleIncreasing = document.getElementById("peopleIncreasing");
const peopleDecreasing = document.getElementById("peopleDecreasing");





// CODES

let tipCount = 0;
let peopleCount = 1;
let billCount = billInput.value;
let tipDisplay = 0;
let totalDisplay = 0;


// BUTTONS 
tipIncreasing.addEventListener('click', () => {
    if (tipCount >= 0 && tipCount <= 95) {
        tipCount += 5;
        tipInput.value = `${tipCount}%`;
    }
    tipPriceAnswer();
    totalPriceAnswer();
});

tipDecreasing.addEventListener('click', () => {
    if (tipCount > 0) {
        tipCount -= 5;
        tipInput.value = `${tipCount}%`;
    }
    tipPriceAnswer();
    totalPriceAnswer();
});

peopleIncreasing.addEventListener('click', () => {
    peopleCount++;
    ofPeopleInput.value = peopleCount
    tipPriceAnswer();
    totalPriceAnswer();
});

peopleDecreasing.addEventListener('click', () => {
    if (peopleCount > 1) {
        peopleCount--;
        ofPeopleInput.value = peopleCount
    }
    tipPriceAnswer();
    totalPriceAnswer();
});



// INPUT
billInput.addEventListener('input', () => {
    let value = billInput.value;

    if (value.includes('.')) {
        let parts = value.split('.');
        if (parts[1].length > 2) {
            value = `${parts[0]}.${parts[1].substring(0, 2)}`;
        }
    }
    billInput.value = value;
});




// FUNCTIONS
const tipPriceAnswer = () => {
    billCount = billInput.value;
    const calculation = `${billCount}/100*${tipCount}/${peopleCount}`;
    tipDisplay = eval(calculation).toFixed(2);
    tipPrice.textContent = `$${tipDisplay}`
};


const totalPriceAnswer = () => {
    billCount = billInput.value;
    const calculation = `${billCount}/100*${tipCount}/
    ${peopleCount}+(${billCount}/${peopleCount})`
    totalDisplay = eval(calculation).toFixed(2);
    totalPrice.textContent = `$${totalDisplay}`
}




