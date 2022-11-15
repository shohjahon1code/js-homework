// 1
var a = 10;
var b = 5;

console.log(a + b);

// 2
var a = 25;
var b = 15;
var result = a - b;

console.log(result);

// 3
var a = 10;
var b = 5;
var c = a - b;
var d = 7;
var result = c + d;
console.log(result);

// 4
var a = 10;
var b = 3;
var mod = a % b;
console.log(mod);

// 5
console.log(2 ** 10);

// amaliyot uy ishi

var name = prompt("Ismingizni kiriting?");
var surName = prompt("Familiyangizni kiritng?");
var age = prompt("Yoshingizni kiriting?");
var futureJob = prompt("Kelajakdagi kasbingiuzni kiriting?");
var birthCity = prompt("Tugilgan sharingizni kiriitng?");
var whereStudy = prompt("Qayerda uqiysiz?");
var favouriteAnimal = prompt("Sevimli hayvoningizni kiriitng?");
var favouriteSport = prompt("Sevimli sport turinngizni kiriting?");

console.log(
  `Mening ismim ${name}.\n Familiyam ${surName}.\n Hozir ${age}yoshdaman.\n Kelajakda ${futureJob} bolmoqchiman.\n ${birthCity}da tug'ilganman.\n Hozirda ${whereStudy}da talim olaman.\n Mening sevimli hayvonim ${favouriteAnimal}.\n Mening sevimli sport turim ${favouriteSport}`
);
