// // Exercise 1 -------------------------------------

// let userAge = prompt('Ваш возраст?');

// if (0 <= userAge && userAge <= 2) {
// 	alert('Вы ребенок!');
// }
// else if (12 <= userAge && userAge <= 18) {
// 	alert('Вы подросток!');
// }
// else if (18 < userAge && userAge <= 60) {
// 	alert('Вы взрослый!');
// }
// else if (userAge > 60) {
// 	alert('Вы пенсионер!');
// }
// else alert('Неправильное значение!');

// // Exercise 2 -------------------------------------

// let number = prompt('Введите число');
// if (number == 0) {
// 	alert(')');
// }
// else if (number == 1) {
// 	alert('!');
// }
// else if (number == 2) {
// 	alert('@');
// }
// else if (number == 3) {
// 	alert('#');
// }
// else if (number == 4) {
// 	alert('$');
// }
// else if (number == 5) {
// 	alert('%');
// }
// else if (number == 6) {
// 	alert('^');
// }
// else if (number == 7) {
// 	alert('&');
// }
// else if (number == 8) {
// 	alert('*');
// }
// else if (number == 9) {
// 	alert('(');
// }
// else alert('Неверное значение!');


// // Exercise 3 -------------------------------------

// let allNumeric = prompt('Введите трехзначное число');

// firstWhile:
// while (allNumeric !== null
// 	&& allNumeric !== "") {
// 	while (allNumeric.length === 3) {
// 		if (allNumeric[0] === allNumeric[1]
// 			|| allNumeric[1] === allNumeric[2]
// 			|| allNumeric[0] === allNumeric[2]) {
// 			alert('Совпадение цифер!');
// 			allNumeric = prompt('Введите трехзначное число');
// 		}
// 		else {
// 			alert('Совпадения нет!');
// 			break firstWhile;
// 		}
// 	}
// 	allNumeric = prompt('Введите трехзначное число!');
// }
// alert('До свидания!');

// // Exercise 4 -------------------------------------

// let year = prompt('Введите год для проверки');

// while (year !== null && year !== "") {

// 	while (year.length === 4) {

// 		if ((0 == +year % 4) && (0 != +year % 100) || (0 == +year % 400)) {
// 			alert('Год високосный!');
// 			year = prompt('Хотите проверить еще?', '');
// 		}

// 		else {
// 			alert('Год не високосный!');
// 			year = prompt('Хотите проверить еще?', '');
// 		}
// 	}
// 	year = prompt('Введите четырех значное число!', '');
// }

// alert('До свидания!');

// // Exercise 5 -------------------------------------

// let numeric = prompt('Введите пятиразрядное число');

// firstWhile:
// while (numeric !== null
// 	&& numeric !== "") {

// 	while (numeric.length === 5) {

// 		if (numeric[0] === numeric[4] || numeric[1] === numeric[3]) {
// 			alert('Это полиндром!');
// 			numeric = prompt('Хотите проверить еще раз?');
// 		}

// 		else {
// 			alert('Это не полиндром!');
// 			numeric = prompt('Хотите проверить еще раз?');
// 		}
// 	}

// 	numeric = prompt('Введите пятиразрядное число!');
// }

// alert('До свидания!');

// // Exercise 6 -------------------------------------

// let usd = +prompt('Сумма для перевода в USD :');
// let currency = prompt('Валюта в которую хотите конвертировать (EUR, UAH, AZN)');
// let eur = 0.99;
// let uah = 29.56;
// let azn = 1.7;
// let result;
// let yesNo;

// firstWhile:
// while ((usd != null && usd != "")
// 	&& (currency != null && currency != "")) {

// 	while (currency.length == 3 && usd >= 1) {
// 		if (currency == 'EUR') {
// 			currency = 0.99;
// 			alert(usd * currency);
// 		}

// 		else if (currency == 'UAH') {
// 			currency = 29.56;
// 			alert(usd * currency);
// 		}

// 		else if (currency == 'AZN') {
// 			currency = 1.7;
// 			alert(usd * currency);
// 		}
// 	}

// 	yesNo = confirm('Хотите конвертировать еще раз?');

// 	if (yesNo == true) {
// 		usd = +prompt('Сумма для перевода в USD :');
// 		currency = prompt('Валюта в которую хотите конвертировать (EUR, UAH, AZN)');
// 		continue firstWhile;
// 	} else {
// 		break firstWhile;
// 	}
// }
// alert('Досвидания!');

// // Exercise 7 -------------------------------------

// let question = confirm('Вы хотите рассчитать сумму скидки?');

// while (question == 1) {
// 	sum = +prompt('Введите сумму для рассчета скидки :');

// 	if (sum == null || sum == "") {
// 		break;
// 	}

// 	else if (sum > 0 && sum <= 300) {
// 		discount = sum * 0.03;
// 		alert((sum - discount).toFixed(2));
// 	}

// 	else if (sum > 300 && sum <= 500) {
// 		discount = sum * 0.05;
// 		alert((sum - discount).toFixed(2));
// 	} else {
// 		discount = sum * 0.07;
// 		alert((sum - discount).toFixed(2));
// 	}

// 	question = confirm('Хотите рассчитать сумму скидки еще раз?');
// }
// alert('До свидания!');

// Exercise 8 -------------------------------------

// let question = confirm('Хотите проверить вписывается ли круг в квадрат?');

// while (question == 1) {
// 	lengthCircle = prompt('Введите длину круга');
// 	perimetrSquare = prompt('Введите периметр квадрата');
// 	diamert = lengthCircle / Math.PI;
// 	side = perimetrSquare / 4;

// 	if ((lengthCircle == null || lengthCircle == "")
// 		&& (perimetrSquare == null || perimetrSquare == "")) {
// 		break;
// 	}

// 	else if (diamert <= side) {
// 		alert('Вписывается!');
// 	} else {
// 		alert('Не вписывается!');
// 	}

// 	question = confirm('Хотите проверить cнова?');
// }

// alert('До свидания!');

// // Exercise 9 -------------------------------------

// let start = confirm('Сыграем?');

// firstWhile:
// while (start == 1) {
// 	questionOne = prompt(`Какой сейчас год? :
// 2020?
// 2021?
// 2022?`);
// 	if (questionOne == 2020 || questionOne == 2021) {
// 		questionOne = 0;
// 	}
// 	else if (questionOne == 2022) {
// 		questionOne = 2;
// 	}

// 	questionTwo = prompt(`Какое время года? :
// Лето?
// Осень?
// Весна?`);

// 	if (questionTwo == 'Осень' || questionTwo == 'Весна') {
// 		questionTwo = 0;
// 	}

// 	else if (questionTwo == 'Лето') {
// 		questionTwo = 2;
// 	}

// 	questionThree = prompt(`Какой месяц? :
// Август?
// Июль?
// Июнь?`);

// 	if (questionThree == 'Август' || questionThree == 'Июнь') {
// 		questionThree = 0;
// 	}

// 	else if (questionThree == 'Июль') {
// 		questionThree = 2;
// 	}

// 	break;
// }

// alert('Поздравляю! Вы набрали :' + ' ' + (questionOne + questionTwo + questionThree) + ' ' + 'баллов.');

// // Exercise 10 -------------------------------------

// let day = +prompt('Введите день :');
// let month = +prompt('Введите месяц :');
// let year = +prompt('Введите год :');

// let date;

// switch (month) {
// 	case 1:
// 	case 3:
// 	case 5:
// 	case 7:
// 	case 8:
// 	case 10:
// 	case 12:
// 		if (day < 31) {
// 			day++;
// 		}
// 		else if (day == 31 && month == 12) {
// 			day = 1;
// 			month = 1;
// 			year++;
// 		}
// 		else if (day == 31) {
// 			day = 1;
// 			month++;
// 		}
// 		else {
// 			alert('Такой даты не существует!');
// 		}
// 		break;
// 	case 2:
// 		if ((year % 400 === 0 || year % 4 === 0 && year % 100 !== 0)) {
// 			if (day < 29) {
// 				day++;
// 			}
// 			else if (day == 29) {
// 				day = 1;
// 				month++;
// 			}
// 			else {
// 				alert('Такой даты не существует!');
// 			}
// 		}
// 		else {
// 			if (day < 28) {
// 				day++;
// 			}
// 			else if (day == 28) {
// 				day = 1;
// 				month++;
// 			}
// 			else {
// 				alert('Такой даты не существует!');
// 			}
// 		}
// 		break;
// 	case 4:
// 	case 6:
// 	case 9:
// 	case 11:
// 		if (day < 30) {
// 			day++;
// 		}
// 		else if (day == 30) {
// 			day = 1;
// 			month++;
// 		}
// 		else {
// 			alert('Такой даты не существует!');
// 		}
// 		break;
// 	default:
// 		alert('Такой даты не существует!');
// }
// alert('Следуйщая дата :' + ' ' + `${day}.${month}.${year}`);