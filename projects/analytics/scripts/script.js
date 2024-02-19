// Fonction d'affichage du menu d'en-tête
let menu = document.querySelector("header > div > span");
let nav = document.querySelector("nav");

menu.addEventListener("click", function () { nav.style.display = "block"; });

// Fonction de type « carrousel » pour la section « Recent Comments »
let recentCommentsCarousel = document.getElementById("recent_comments_carousel");
let leftButton = document.getElementById("left_button");
let rightButton = document.getElementById("right_button");

let slides = [{
	image: "avatar6.png",
	title: "Jane",
	date: "Sep 30. 2014 10:10 PM",
	text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pelientesque elit eget gravida cum."
},
{
	image: "avatar3.png",
	title: "John",
	date: "Sep 29. 2014 9:12 PM",
	text: "Keep up the GREAT work! I am cheering for you!! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
},
{
	image: "avatar1.png",
	title: "Bo",
	date: "Sep 28. 2014 10:15 PM",
	text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
}];

recentCommentsCarousel.innerHTML = "";

let index = 0;

for (index in slides) {
	recentCommentsCarousel.insertAdjacentHTML("beforeend", '<div class="recent_comments"><img class="avatar" src="assets/' + slides[index].image + '"><div><span class="avatar_name">' + slides[index].title + '</span><span class="date">' + slides[index].date + '</span><p>' + slides[index].text + "</p></div></div>");
}

const divSlides = Array.from(document.getElementsByClassName("recent_comments"));
const lastIndex = divSlides.length-1;
const firstSlide = divSlides[0];
const inBetweenSlide = Array.from(divSlides.slice(1, lastIndex));
const lastSlide = divSlides[lastIndex];

let leftButtonDisplay = window.getComputedStyle(leftButton).display;

//Initialisation du carrousel (pas de bouton de retour arrière gauche et première diapositive)
leftButton.style.display = "none";
let list = 0;
divSlides[list].style.display = "flex";

rightButton.addEventListener("click", function () {
	divSlides[list].classList.remove("left_left_transition");
	divSlides[list].classList.remove("left_right_transition");
	divSlides[list].classList.remove("right_left_transition");
	divSlides[list].classList.add("right_right_transition");

	list++;
	divSlides[list].classList.remove("left_left_transition");
	divSlides[list].classList.remove("right_left_transition");
	divSlides[list].classList.remove("right_right_transition");
	leftButton.style.display = "inline";
	divSlides[list].classList.add("left_right_transition");

	if (divSlides[list] == inBetweenSlide[0]) {
		setTimeout(function () {
			firstSlide.style.display = "none";
			inBetweenSlide[0].style.display = "flex";		
			lastSlide.style.display = "none";
		}, 900);
		rightButton.style.display = "inline";
	} else if (divSlides[list] == lastSlide) {
		setTimeout(function () {
			inBetweenSlide[0].style.display = "none";
			lastSlide.style.display = "flex";
		}, 900);
		rightButton.style.display = "none";
	}
});

leftButton.addEventListener("click", function () {
	divSlides[list].classList.remove("left_right_transition");
	divSlides[list].classList.remove("right_left_transition");
	divSlides[list].classList.remove("right_right_transition");
	divSlides[list].classList.add("left_left_transition");

	list--;
	divSlides[list].classList.remove("left_left_transition");
	divSlides[list].classList.remove("left_right_transition");
	divSlides[list].classList.remove("right_right_transition");
	rightButton.style.display = "inline";
	divSlides[list].classList.add("right_left_transition");

	if (divSlides[list] == firstSlide) {
		setTimeout(function () {
			firstSlide.style.display = "flex";
			inBetweenSlide[0].style.display = "none";
			leftButton.style.display = "none";
		}, 900);
	} else if (divSlides[list] == inBetweenSlide[0]) {
		setTimeout(function () {
			firstSlide.style.display = "none";
			inBetweenSlide[0].style.display = "flex";
			lastSlide.style.display = "none";
			leftButton.style.display = "inline";
		}, 900);
	}
});