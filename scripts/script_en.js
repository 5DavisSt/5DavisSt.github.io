// Burger menu function
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
		// Nothing must happen
	} else {
		menu.style.display = "none";
		burger.innerHTML = "☰";
	}
});

liensMenu.forEach(function (item, index) {
	item.addEventListener("click", function () {
		if (burgerVisibility == "hidden") {
			// Nothing must happen
		} else {
			menu.style.display = "none";
			burger.innerHTML = "☰";
		}
	});
});

// Function that displays works done in the past (link to other webpages)
let works = document.getElementById("works_content");
const directory = "projects/";
const imagesFolder = "images/";
const worksContent = [
	{
		mobileImage: "myfood_mobile.png",
		computerImage: "myfood_computer.png",
		alt: "MyFood Project's Illustration",
		description: "MyFood Project",
		folder: "myfood/",
		file: "my_food.html"
	},
	{
		mobileImage: "beverages_mobile.png",
		computerImage: "beverages_computer.png",
		alt: "Beverages Project's Illustration",
		description: "Beverages Project",
		folder: "beverages-project/",
		file: "beverages.html"
	},
	{
		mobileImage: "analytics_mobile.png",
		computerImage: "analytics_computer.png",
		alt: "Analytics Project's Illustration",
		description: "Analytics Project",
		folder: "analytics/",
		file: "index.html"
	},
	{
		mobileImage: "restaurant2_mobile.png",
		computerImage: "restaurant2_computer.png",
		alt: "Restaurant 2 Project's Illustration (no logo)",
		description: "Restaurant 2 Project (no logo)",
		folder: "restaurant2-logo/",
		file: "index.html"
	},
	{
		mobileImage: "john_doe_project_mobile.png",
		computerImage: "john_doe_project_computer.png",
		alt: "John Doe Project's Illustration",
		description: "John Doe Project",
		folder: "johndoe-project/",
		file: "index.html"
	},
	{
		mobileImage: "cafe_project_mobile.png",
		computerImage: "cafe_project_computer.png",
		alt: "Café Project's Illustration",
		description: "Cafe Project",
		folder: "cafe-project/",
		file: "index.html"
	}
];

for (let index in worksContent) {
	works.insertAdjacentHTML("beforeend", '<div><a href="' + directory + worksContent[index].folder + worksContent[index].file + '" target="_blank"><picture><source media="(max-width: 767px)" srcset="' + imagesFolder + worksContent[index].mobileImage + '"><img src="' + imagesFolder + worksContent[index].computerImage + '" alt="' + worksContent[index].description + '"></picture></a><a href="' + directory + worksContent[index].folder + worksContent[index].file + '" target="_blank">' + worksContent[index].description + '</a></div>');
}

// Image gallery function (using modal windows)
let gallery = document.getElementById("gallery_content");
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

const image = document.querySelectorAll("#gallery_content > figure");
const dialog = Array.from(document.querySelectorAll("#gallery_content dialog"));
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
