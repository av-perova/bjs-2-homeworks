"use strict"

function solveEquation(a, b, c) {
	let arr = [];
	let d = b ** 2 - 4 * a * c;

	if (d < 0) {
		return arr;
	} else if (d === 0) {
		let root = -b / (2 * a);
		arr.push(root);
		return arr;
	} else if (d > 0) {
		let root1 = (-b + Math.sqrt(d)) / (2 * a);
		let root2 = (-b - Math.sqrt(d)) / (2 * a);
		arr.push(root1, root2);
		return arr;
	}
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
	let payment;
	let percentPerMonth;
	let body;
	let sum;
	body = amount - contribution;
	percentPerMonth = percent / 100 / 12;
	payment = body * (percentPerMonth + (percentPerMonth / (((1 + percentPerMonth) ** countMonths) - 1)));
	sum = payment * countMonths;
	return Math.round(sum * 100) / 100;
}