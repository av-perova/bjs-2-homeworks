// ЗАДАНИЕ 1

// Функция, которая получает на вход числа, а возвращает минимальное, максимальное и среднее арифметическое значений массива.
function getArrayParams(...arr) {
	let min = Infinity;
	let max = -Infinity;
	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
		if (arr[i] < min) {
			min = arr[i]
		}
		if (arr[i] > max) {
			max = arr[i]
		}
	}

	let avg = Number((sum / arr.length).toFixed(2));
	return {
		min: min,
		max: max,
		avg: avg
	}
}

//ЗАДАНИЕ 2

// Насадка суммирования элементов.
// Функция должна находить сумму элементов массива и возвращать ее.
function summElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sum = 0;

	for (let i = 0; i < arr.length; i++) {
		sum += arr[i];
	}
	return sum;
}

// Насадка вычисления разницы максимального и минимального элементов.
// Функция для вычисления разницы максимального и минимального элементов.
function differenceMaxMinWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let min = Infinity;
	let max = -Infinity;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] < min) {
			min = arr[i]
		}
		if (arr[i] > max) {
			max = arr[i]
		}
	}
	const diff = max - min;
	return diff;
}

// Насадка вычисления разницы сумм чётных и нечётных элементов.
// Функция для вычисления разницы сумм чётных и нечётных элементов.
function differenceEvenOddWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let sumOddElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			sumEvenElement += arr[i];
		} else {
			sumOddElement += arr[i];
		}
	}
	const diff = sumEvenElement - sumOddElement;
	return diff;
}

// Насадка вычисления среднего значения чётных элементов.  
// Функция, которая будет вычисляет среднее значение чётных элементов.
function averageEvenElementsWorker(...arr) {
	if (arr.length === 0) {
		return 0;
	}

	let sumEvenElement = 0;
	let countEvenElement = 0;

	for (let i = 0; i < arr.length; i++) {
		if (arr[i] % 2 === 0) {
			countEvenElement++;
			sumEvenElement += arr[i];
		}
	}
	const avgEvenElements = sumEvenElement / countEvenElement;
	return avgEvenElements;
}

// ЗАДАНИЕ 3

// Мясорубка — агрегатор преобразований.
// Функция, которая из массива данных и насадки будет возвращать максимальный результат функции насадки.
function makeWork (arrOfArr, func) {
    
}