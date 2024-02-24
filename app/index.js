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

let errorMessage = "Can't be zero";
