//ЗАДАЧА 1. Сравнить массивы

//Функция сравнивает значения двух массивов  Если массивы имеют одинаковые значения на одинаковых индексах, возвращает true (иначе false).
function compareArrays(arr1, arr2) {
	if (arr1.length !== arr2.length) {
		return false;
	}
	return arr1.every((element, i) => element === arr2[i]);
}

// ЗАДАЧА 2. Фильтрация и преобразование массива

// Функция возвращает среднее значение возраста пользователей одного пола.
function getUsersNamesInAgeRange(users, gender) {
	let count = 0;
	let result = users
		.filter(element => {
			if (element.gender === gender) {
				count++;
				return true;
			}
			return false;
		})
		.map(element => element.age)
		.reduce((acc, age) => acc + age, 0);

	if (result === 0 || count === 0) {
		return 0;
	}

	return result / count;
}