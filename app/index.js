const tipCalculator = () => {
	let bill = document.getElementById("bill").value;
	let people = document.getElementById("people").value;
	let selectTip = document.querySelectorAll('input[name="tip"]');

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
	//reset bill
	let resetBill = document.getElementById("bill");
	resetBill.value = "0";
	resetBill.style.color = "#5e7a7d";
	//reset number of people
	let resetPeople = document.getElementById("people");
	resetPeople.value = "0";
	resetPeople.style.color = "#5e7a7d";

	//reset tip amount and total
	let innerValue = "$0.00";
	let resetTipAmount = document.querySelector(".tip__amount");
	resetTipAmount.innerHTML = `${innerValue}`;
	let resetTotalPeople = document.querySelector(".total__person");
	resetTotalPeople.innerHTML = `${innerValue}`;
};

let costButton = document.querySelector(".cost__button");
let resetButton = document.querySelector(".reset__button");
costButton.addEventListener("click", tipCalculator);
resetButton.addEventListener("click", resetCalculation);
