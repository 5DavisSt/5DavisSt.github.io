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

// Fonction d'affichage des sections animées
let sectionList = Array.from(document.getElementsByTagName("section"));

sectionList.forEach(function (item, index) {
	item.addEventListener("scroll", function () {
//if (item.style.visibility == "hidden") {
			item.style.color = "blue";
		//} else {
		//	item.style.visibility = "hidden";
		//}
	});
});

// Ceci est une fonction auto - exécutable.Les fonctions auto - exécutables
// sont des fonctions qui s'exécutent immédiatement après leur déclaration,
// sans avoir besoin d'être appelées.Les accolades immédiatement après la 
// déclaration de la fonction et les parenthèses à la fin de la déclaration 
// définissent la fonction et permettent de l'exécuter immédiatement.
(function () {
    // Utilisation de la directive "use strict" pour activer le mode strict en JavaScript
    // Cela implique une meilleure gestion des erreurs et une syntaxe plus stricte pour le code
    "use strict"

    // Définir la fonction detectAndAnimate pour basculer la classe des éléments
    const detectAndAnimate = () => {
        // Sélectionner tous les éléments avec la classe 'animate-on-scroll'
        const elements = document.querySelectorAll('.animate-on-scroll');
        // Boucle sur tous les éléments sélectionnés
        elements.forEach(element => {
            // Vérifier si l'élément est visible dans la fenêtre du navigateur
            const isVisible = isElementInViewport(element);
            // Ajouter ou supprimer la classe 'is-visible' en fonction de la visibilité de l'élément
            element.classList.toggle('is-visible', isVisible);
        });
    };
    // Définir la fonction isElementInViewport pour vérifier la visibilité de l'élément dans la fenêtre du navigateur
    const isElementInViewport = el => {
        // Récupérer les dimensions de l'élément
        const rect = el.getBoundingClientRect();
        // Récupérer la hauteur de la fenêtre du navigateur
        const viewportHeight = window.innerHeight || document.documentElement.clientHeight;
        // Récupérer la largeur de la fenêtre du navigateur
        const viewportWidth = window.innerWidth || document.documentElement.clientWidth;
        // Retourner vrai si l'élément est entièrement visible dans la fenêtre du navigateur, sinon retourner faux
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= viewportHeight &&
            rect.right <= viewportWidth
        );
    };
    // Écouter l'événement de défilement de la fenêtre du navigateur et appeler la fonction detectAndAnimate
    window.addEventListener('scroll', detectAndAnimate);
    // Appeler la fonction detectAndAnimate une fois au démarrage pour mettre à jour l'état des éléments
    detectAndAnimate();
})()

// Fonction d'affichage des travaux réalisés (vers d'autres pages web)
let works = document.getElementById("contenu_travaux");
const directory = "../../../Exercices/";
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

/*const image = document.querySelectorAll("#contenu_travaux > figure");
const dialog = Array.from(document.getElementsByTagName("dialog"));
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
});*/

// Fonction de la galerie d'image (à l'aide de fenêtres modales)
let gallery = document.getElementById("contenu_galerie");
let galleryContent = [
	{
		file: "galerie1.jpg",
		alt: "Illustration 1"
	},
	
	{
		file: "galerie2.jpg",
		alt: "Illustration 2"
	},
	
	{
		file: "galerie3.jpg",
		alt: "Illustration 3"
	},
	
	
	{
		file: "galerie4.jpg",
		alt: "Illustration 4"
	},
	
	
	{
		file: "galerie5.jpg",
		alt: "Illustration 5"
	},

	{
		file: "galerie6.jpg",
		alt: "Illustration 6"
	}
];

for (let index in galleryContent) {
	gallery.insertAdjacentHTML("beforeend", '<figure><img src="images/' + galleryContent[index].file + '" alt="' + galleryContent[index].alt + '"><figcaption>' + galleryContent[index].alt + '</figcaption></figure><dialog><button class="close">X</button><img src="images/' + galleryContent[index].file + '" alt="' + galleryContent[index].alt + '"></dialog>');
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

// Fonction de formulaire flottant, apparaissant au clic
let contact = document.getElementById("boutonContact");
let formulaire = document.querySelector("#contenu_contact dialog");
let fermer = document.getElementById("bouton_fermer");

contact.addEventListener("click", function () {
	formulaire.showModal();
});

fermer.addEventListener("click", function () {
	formulaire.classList.add("fermeture");
    formulaire.addEventListener("animationend", function () { formulaire.classList.remove("fermeture"); formulaire.close(); });
});
