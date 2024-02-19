let gallery = document.getElementById("gallery");
const galleryContent = [
	{
		file: "wedding.jpg",
		alt: "White Wedding"
	},
	
	{
		file: "rocks.jpg",
		alt: "Niagara"
	},
	
	{
		file: "sailboat.jpg",
		alt: "OpenSea"
	},
	
	{
		file: "underwater.jpg",
		alt: "Drown to Earth"
	},
	
	
	{
		file: "chef.jpg",
		alt: "Chef's Kiss"
	},
	
	
	{
		file: "wedding2.jpg",
		alt: "White Wedding 2"
	},

	{
		file: "p6.jpg",
		alt: "Typewriter"
	}
];

for (let index in galleryContent) {
	gallery.insertAdjacentHTML("beforeend", '<img src="assets/' + galleryContent[index].file + '" alt="' + galleryContent[index].alt + '"><dialog><button class="close">X</button><img src="assets/' + galleryContent[index].file + '" alt="' + galleryContent[index].alt + '"></dialog>');
}

const image = document.querySelectorAll("#gallery > img");
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
});