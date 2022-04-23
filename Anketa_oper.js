var surname = prompt('Введите вашу фамилию');
var name = prompt('Введите ваше имя');
var secondname = prompt('Введите ваше отчество');
var age = prompt('Введите ваш возраст в годах');
var gender = confirm('Ваш пол мужской?');

var yourGender = gender ? "мужской" : "женский";

var benefit = (gender && age < 63) || (!gender && age < 58) ? "нет" : "да";

var anketa = (`Ваше ФИО: ${surname} ${name} ${secondname}. Ваш возраст в годах: ${age}. Ваш возраст в днях: ${Number(age) * 365}. Через пять лет вам будет: ${Number(age) + 5}.  Ваш пол: ${yourGender}. Вы на пенсии: ${benefit}.`);

alert(anketa)