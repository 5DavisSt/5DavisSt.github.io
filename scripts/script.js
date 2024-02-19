// Fonction du menu « burger »
const burger = document.getElementById("burger");
let burgerVisibility = window.getComputedStyle(burger).visibility;
const menu = document.querySelector("menu");
const lienLogo = document.getElementById("logo");
const liensMenu = Array.from(document.querySelectorAll("menu a"));

burger.addEventListener("click", function () {
	if (burger.innerHTML == "☰") {
		burger.innerHTML = "X";
		menu.style.display = "flex";
	} else {
		burger.innerHTML = "☰";
		menu.style.display = "none";
	}
});

lienLogo.addEventListener("click", function () {
	if (burgerVisibility == "hidden") {
		// Rien ne doit se passer
	} else {
		menu.style.display = "none";
		burger.innerHTML = "☰";
	}
});

liensMenu.forEach(function (item, index) {
	item.addEventListener("click", function () {
		if (burgerVisibility == "hidden") {
			// Rien ne doit se passer
		} else {
			menu.style.display = "none";
			burger.innerHTML = "☰";
		}
	});
});

// Fonction d'affichage des travaux réalisés (vers d'autres pages web)
let works = document.getElementById("contenu_travaux");
const directory = "projects/";
const imagesFolder = "images/";
const worksContent = [
	{
		mobileImage: "myfood_mobile.png",
		computerImage: "myfood_computer.png",
		alt: "Illustration du projet MyFood",
		description: "Projet MyFood",
		folder: "myfood/",
		file: "my_food.html"
	},
	{
		mobileImage: "beverages_mobile.png",
		computerImage: "beverages_computer.png",
		alt: "Illustration du projet Beverages",
		description: "Projet Beverages",
		folder: "beverages-project/",
		file: "beverages.html"
	},
	{
		mobileImage: "analytics_mobile.png",
		computerImage: "analytics_computer.png",
		alt: "Illustration du projet Analytics",
		description: "Projet Analytics",
		folder: "analytics/",
		file: "index.html"
	},
	{
		mobileImage: "restaurant2_mobile.png",
		computerImage: "restaurant2_computer.png",
		alt: "Illustration du projet Restaurant 2 (sans logo)",
		description: "Projet Restaurant 2 (sans logo)",
		folder: "restaurant2-logo/",
		file: "index.html"
	},
	{
		mobileImage: "john_doe_project_mobile.png",
		computerImage: "john_doe_project_computer.png",
		alt: "Illustration du projet John Doe",
		description: "Projet John Doe",
		folder: "johndoe-project/",
		file: "index.html"
	},
	{
		mobileImage: "cafe_project_mobile.png",
		computerImage: "cafe_project_computer.png",
		alt: "Illustration du projet Café",
		description: "Projet Café",
		folder: "cafe-project/",
		file: "index.html"
	}
];

for (let index in worksContent) {
	works.insertAdjacentHTML("beforeend", '<div><a href="' + directory + worksContent[index].folder + worksContent[index].file + '" target="_blank"><picture><source media="(max-width: 767px)" srcset="' + imagesFolder + worksContent[index].mobileImage + '"><img src="' + imagesFolder + worksContent[index].computerImage + '" alt="' + worksContent[index].description + '"></picture></a><a href="' + directory + worksContent[index].folder + worksContent[index].file + '" target="_blank">' + worksContent[index].description + '</a></div>');
}

// Fonction de la galerie d'image (à l'aide de fenêtres modales)
let gallery = document.getElementById("contenu_galerie");
let galleryContent = [
	{
		size: "960x723",
		colors: "gray/white",
		format: "jpg",
		alt: "Illustration 1"
	},
	
	{
		size: "1920x1440",
		colors: "black/lightblue",
		format: "jpg",
		alt: "Illustration 2"
	},
	
	{
		size: "474x632",
		colors: "green/white",
		format: "jpg",
		alt: "Illustration 3"
	},
	
	
	{
		size: "1683x840",
		colors: "black/lightblue",
		format: "jpg",
		alt: "Illustration 4"
	},
	
	
	{
		size: "474x316",
		colors: "lightblue/maroon",
		format: "jpg",
		alt: "Illustration 5"
	},

	{
		size: "1680x1050",
		colors: "black/red",
		format: "jpg",
		alt: "Illustration 6"
	}
];

for (let index in galleryContent) {
	gallery.insertAdjacentHTML("beforeend", '<figure><img src="https://placehold.co/' + galleryContent[index].size + '/' + galleryContent[index].colors + '/' +  galleryContent[index].format + '" alt="' + galleryContent[index].alt + '"><figcaption>' + galleryContent[index].alt + '</figcaption></figure><dialog><button class="close">X</button><img src="https://placehold.co/' + galleryContent[index].size + '/' + galleryContent[index].colors + '/' +  galleryContent[index].format + '" alt="' + galleryContent[index].alt + '"></dialog>');
}

const image = document.querySelectorAll("#contenu_galerie > figure");
const dialog = Array.from(document.querySelectorAll("#contenu_galerie dialog"));
const button = Array.from(document.getElementsByClassName("close"));

image.forEach(function (item, index) {
	item.addEventListener("click", function() {
		dialog[index].showModal();
	});
});

button.forEach(function (item, index) {
	item.addEventListener("click", function() {
		dialog[index].close();
	});
});
