// 1. მოცემულია მასივი const numberArrays = [2, 4, 6, 8, 10, 12].   ლექციაზე გავლილი მეთოდების (pop, push, shift, unshift) დახმარებით  მასივის ბოლო ელემენტი გადმოიტანეთ მასივის დასაწყისში და  კონსოლში გამოიტანეთ მასივი. (ყველა მეთოდის გამოყენება არ დაგჭირდებათ და საბოლოოდ მასივი უნდა მიიღოთ ასეთი ფორმით [12, 2, 4, 6, 8, 10] )
const numberArrays = [2, 4, 6, 8, 10, 12];
const last = numberArrays.pop();
numberArrays.unshift(last);

// console.log(numberArrays);

// 2. შექმენით 3 ელემენტიანი მასივი, რომლის თითოეული ელემენტი არის ობიექტი, რომელსაც გააჩნია   productTitle   და   productPrice  property.
const products = [
	{
		productTitle: "title 1",
		productPrice: 2000,
	},
	{
		productTitle: "title 2",
		productPrice: 1000,
	},
	{
		productTitle: "title 3",
		productPrice: 3000,
	},
];

// console.log(products);

// 3. შექმენით 5 ელემენტიანი რიცხვების მასივი, console.log-ით გამოიტანეთ ამ მასივის ელემენტების საშუალო არითმეტიკული;
const numbers = [2, 4, 6, 8, 12];
const length = numbers.length;
const sum = numbers[0] + numbers[1] + numbers[2] + numbers[3] + numbers[4];
// console.log(sum / length);

// 4. შექმენით ობიექტი რომელსაც გააჩნია შემდეგი ველები (properties):
// phoneName - სტრინგ ტიპის მნიშვნელობა
// phoneDescription - სტრინგ ტიპის მნიშვნელობა
// phonePrice - რიცხვითი მნიშვნელობა
// shopAddresses - სტრინგ ტიპის  მნიშვნელობების მასივი
// phoneMemoryInGB - რიცხვითი მნიშვნელობა

const product = {
	phoneName: "iphone 14",
	phoneDescription: "description text",
	phonePrice: 3000,
	shopAddresses: ["address 1", "address 2"],
	phoneMemoryInGB: 128,
};

// console.log(product);

// 5. console.log ში გამოიტანეთ სტრინგი "Phone name is (#3 დავალების phoneName  -ის  მნიშვნელობა),  phone price is (#3 დავალების  phonePrice  -ის მნიშვნელობა)  and you can buy it at (#3 დავალების shopAddresses-ის პირველი მნიშვნელობა)"

// console.log(
// 	`Phone name is ${product.phoneName},  phone price is ${product.phonePrice} and you can buy it at ${product.shopAddresses[0]}`
// );

let x = 5;
let y = x + 1;

let sumPrice = 1000;
let distance = 102;

if (distance < 100) {
	console.log("delivery price 50");
}

let deliveryPrice = 0;
if (distance > 100) {
	deliveryPrice = 10;
} else {
	deliveryPrice = 20;
}

deliveryPrice = distance > 100 ? 10 : 20;

console.log(deliveryPrice);
if (sumPrice < 100) {
	console.log("delivery price 50 ");
} else if (sumPrice >= 100 && sumPrice < 300) {
	console.log("delivery price 40 ");
} else if (sumPrice >= 300 && sumPrice < 500) {
	console.log("delivery price 30 ");
} else {
	console.log("delivery price 10 ");
}

console.log("after if");
let role = "text";

switch (role) {
	case "admin":
		console.log("admin");
		break;
	case "moderator":
	case "Moderator":
	case "MODERATOR":
		console.log("moderator");
		break;
	case "user":
		console.log("user");
		break;
	default:
		console.log("visitor");
		break;
}

// ასეთი სინტაქსისას ყველა ქეისის კოდს ასრულებს
role = "admin";
switch (role) {
	case "admin":
		console.log("admin");
	case "moderator":
	case "Moderator":
	case "MODERATOR":
		console.log("moderator");
	case "user":
		console.log("user");
	default:
		console.log("visitor");
}

const currencies = [
	{
		code: "AED",
		quantity: 10,
		rateFormated: "6.8886",
		diffFormated: "0.0082",
		rate: 6.8886,
		name: "არაბეთის გაერთიანებული საამიროების დირჰამი",
		diff: -0.0082,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "AMD",
		quantity: 1000,
		rateFormated: "6.4869",
		diffFormated: "0.0334",
		rate: 6.4869,
		name: "სომხური დრამი",
		diff: -0.0334,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "CZK",
		quantity: 10,
		rateFormated: "1.1820",
		diffFormated: "0.0010",
		rate: 1.182,
		name: "ჩეხური კრონა",
		diff: 0.001,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
	{
		code: "EUR",
		quantity: 1,
		rateFormated: "2.7599",
		diffFormated: "0.0056",
		rate: 2.7599,
		name: "ევრო",
		diff: -0.0056,
		date: "2023-04-10T17:45:04.522Z",
		validFromDate: "2023-04-11T00:00:00.000Z",
	},
];

let currenciesLenth = currencies.length;

for (let i = 0; i < currenciesLenth; i++) {
	// debugger;

	if (currencies[i].diff <= 0) {
		continue;
	}

	if (i === 1) {
		// break;
		continue;
	}

	console.log(currencies[i], i);

	console.log(i);

	if (currencies[i].quantity === 10) {
		continue;
	}

	console.log(currencies[i]);
}

console.log("after for loop");
for (let i = currenciesLenth - 1; i >= 0; i--) {
	console.log(currencies[i], i);
}

console.log("after for");

let a = 0;
while (a < 10) {
	console.log(a);

	a++;
}

console.log("after while");

let b = 0;
do {
	console.log(b);
	b++;
} while (b > 10);

console.log("after do while");
