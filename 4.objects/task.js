// ЗАДАНИЕ 1

//1. Функция-конструктор для создания объектов (студентов).
function Student(name, gender, age) {
	this.name = name,
		this.gender = gender,
		this.age = age,
		this.marks = []
}

//Добавление нескольких экземпляров объектов (студентов).
let student1 = new Student("Алиса", "женский", 20);
let student2 = new Student("Денис", "мужской", 23);

//2. Метод для установки предмета.
Student.prototype.setSubject = function(subjectName) {
	this.subject = subjectName;
}

//3. Метод для добавления оценок студенту.
Student.prototype.addMarks = function(...marksToAdd) {
	if ("marks" in this) {
		this.marks.push(...marksToAdd);
	} else {
		console.log(`Студент ${this.name} отчислен.`);
	}
};

//4. Метод возвращает среднее арифметическое оценок студента.
Student.prototype.getAverage = function() {
	if (!("marks" in this) || this.marks.length === 0) {
		return 0;
	}
	const sum = this.marks.reduce((total, mark) => total + mark, 0);
	return sum / this.marks.length;
};

//5. Метод который при вызове будет исключать студента из учебного процесса и устанавливать причину исключения. 
Student.prototype.exclude = function(reason) {
	delete this.subject;
	delete this.marks;
	this.excluded = reason;
};