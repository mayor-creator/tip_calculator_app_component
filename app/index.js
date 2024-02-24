let bill = document.getElementById("bill").value;
let people = document.getElementById("people").value;
let selectTip = document.querySelectorAll('input[name="tip"]');
let costButton = document.querySelector(".cost__button");
let resetButton = document.querySelector(".reset__button");

const tipCalculator = () => {
	//converting bill, people and tip values to floating point
	let amountOfBill = parseFloat(bill);
	let numberOfPeople = parseFloat(people);
	let tipPercent;
	for (let i = 0; i < selectTip.length; i++) {
		if (selectTip[i].checked) {
			tipPercent = parseFloat(selectTip[i].value);
		}
	}

	// calculation for bill
	let total = amountOfBill * (tipPercent / 100);
	let totalBill = amountOfBill + total;
	let totalAmount = totalBill / numberOfPeople;
	let totalPerPerson = totalAmount.toFixed(2);

	// calulation for tip
	let tip = total / numberOfPeople;
	let totalTipPerPerson = tip.toFixed(2);

	// output tip amount result
	let tipAmount = document.querySelector(".tip__amount");
	tipAmount.innerHTML = `$${totalTipPerPerson}`;
	// output total per person result
	let totalPerson = document.querySelector(".total__person");
	totalPerson.innerHTML = `$${totalPerPerson}`;
};

const resetCalculation = () => {
	// let resetBill = document.getElementById("bill").value;
	// resetBill = `${placeholder}`;
	// let resetPeople = document.getElementById("people").value;
	// resetPeople = `${placeholder}`;

	let resetTipAmount = document.querySelector(".tip__amount");
	let innerValue = "$0.00";
	resetTipAmount.innerHTML = `${innerValue}`;
	let resetTotalPeople = document.querySelector(".total__person");
	resetTotalPeople.innerHTML = `${innerValue}`;
};

costButton.addEventListener("click", tipCalculator);
resetButton.addEventListener("click", resetCalculation);
