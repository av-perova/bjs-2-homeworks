// Задача 1. Форматтер чисел

function parseCount(amount) {
	const number = Number.parseFloat(amount);
	if (isNaN(number)) {
		throw new Error("Невалидное значение");
	}
	return number;
}

function validateCount(value) {
	try {
		const number = parseCount(value);
		return number;
	} catch (error) {
		return error;
	}
}

// Задача 2. Треугольник 

class Triangle {
	constructor(a, b, c) {
		this.a = a;
		this.b = b;
		this.c = c;

		if (a + b < c || b + c < a || c + a < b) {
			throw new Error("Треугольник с такими сторонами не существует");
		}
	}

	get perimeter() {
		return this.a + this.b + this.c;
	}

	get area() {
		const p = this.perimeter / 2;
		const area = Math.sqrt(p * (p - this.a) * (p - this.b) * (p - this.c));
		return parseFloat(area.toFixed(3));
	}
}

function getTriangle(a, b, c) {
	try {
		return new Triangle(a, b, c);
	} catch (error) {
		const errorMessage = "Ошибка! Треугольник не существует";
		return {
			get area() {
				return errorMessage;
			},
			get perimeter() {
				return errorMessage;
			}
		}
	}
}