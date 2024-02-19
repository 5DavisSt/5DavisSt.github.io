// Tableaux qui seront appelés dans les fonctions à venir
const eatContent = [
	{
		title: "Bread Basket",
		description: "Assortment of fresh baked fruit breads and muffins 5.50"
	},

	{
		title: "Honey Almond Granola with Fruits",
		description: "Natural cereal of honey toasted oats, raisins, almonds and dates 7.00"	
	},

	{
		title: "Belgian Waffle",
		description: "Vanilla flavored batter with malted flour 7.50"
	},

	{
		title: "Scrambled Eggs",
		description: "Scrambled eggs, roasted red pepper and garlic, with green onions 7.50"
	},

	{
		title: "Blueberry Pancakes",
		description: "With syrup, butter and lots of berries 8.50"
	}
];

const drinkContent = [
	{
		title: "Water",
		description: "A glass of water, you know what it is FREE"
	},

	{
		title: "Expresso",
		description: "What else? 3.50"
	},

	{
		title: "Capuccino",
		description: "More of a crapuccino, if you ask me 4.50"
	},

	{
		title: "Hot Chocolate",
		description: "Much better, in my humble opinion 3.00"
	},

	{
		title: "Americano",
		description: "A cup of water with a bit of coffee on top 7.00"
	}
];

const faqContent = [
	{
		question: "Can I reserve a table?",
		answer: "Yes, call us to make a reservation."
	},
	
	{
		question: "Can I privatize the café for an event?",
		answer: "Yes, from 20 to 50 people, call us for more information."
	},
	
	{
		question: "Is there a parking?",
		answer: "Yes, with 30 places."
	}
];

// Initialisation des variables des fonctions eatDisplay et drinkDisplay
const eatButton = document.getElementById("eat_button");
let eatMenu = document.getElementById("eat");

const drinkButton = document.getElementById("drink_button");
let drinkMenu = document.getElementById("drink");

// Affichage par défaut de la carte des plats
for (let index in eatContent) {
	eatMenu.insertAdjacentHTML("beforeend", "<div><span>" + eatContent[index].title + "</span><p>" + eatContent[index].description + "</p></div>");
}

// Initialisation des variables de la fonction faqDisplay
let faqLocation = document.getElementById("faq_script");

// Affichage par défaut de la foire aux questions (sans les réponses)
for (let index in faqContent) {
	faqLocation.insertAdjacentHTML("beforeend", "<div><div class=\"faq_question\"><p>" + faqContent[index].question + "</p><span class=\"faq_button\">+</span></div><p class=\"faq_answer\" style=\"display: none;\">" + faqContent[index].answer + "</p></div>");
}

// Initialisation d'autres variables de la fonction faqDisplay
let faqButton = Array.from(document.getElementsByClassName("faq_button"));
let faqAnswer = Array.from(document.getElementsByClassName("faq_answer"));

// Fonction d'affichage de la carte des plats (et retrait de la carte des boissons) 
function eatDisplay() {
	eatButton.addEventListener("click", function () {
		drinkMenu.innerHTML = ""; // Vide la carte des boissons
		eatMenu.innerHTML = ""; // Vide la carte des plats
			for (let index in eatContent) {
				eatMenu.insertAdjacentHTML("beforeend", "<div><span>" + eatContent[index].title + "</span><p>" + eatContent[index].description + "</p></div>");
			}
	});
}

// Fonction d'affichage de la carte des boissons (et retrait de la carte des plats) 
function drinkDisplay() {
	drinkButton.addEventListener("click", function () {
		eatMenu.innerHTML = ""; // Vide la carte des plats
		drinkMenu.innerHTML = ""; // Vide la carte des boissons
		for (let index in drinkContent) {
			drinkMenu.insertAdjacentHTML("beforeend", "<div><span>" + drinkContent[index].title + "</span><p>" + drinkContent[index].description + "</p></div>");
		}
	});
}

// Fonction d'affichage de la foire aux questions
function faqDisplay() {
	faqButton.forEach(function (item, index) {
		let faqAnswerUnit = faqAnswer[index];
		item.addEventListener("click", function () {
			if (item.innerHTML == "+") {
				item.innerHTML = "-";
				faqAnswerUnit.style.display = "block";
			} else {
				item.innerHTML = "+";
				faqAnswerUnit.style.display = "none";
			}
		});
	});
}

// Appel des fonctions (le menu des plats est supposé apparaître par défaut)
eatDisplay();
drinkDisplay();
faqDisplay();