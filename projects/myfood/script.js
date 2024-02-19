let tags = document.getElementById("tags_content");

const tagsContent = [
	{
		name: "Travel",
		href: "travel"
	},

	{
		name: "New York",
		href: "new_york"
	},

	{
		name: "Dinner",
		href: "dinner"
	},

	{
		name: "Salmon",
		href: "salmon"
	},

	{
		name: "France",
		href: "france"
	},

	{
		name: "Drinks",
		href: "drinks"
	},

	{
		name: "Ideas",
		href: "ideas"
	},

	{
		name: "Flavors",
		href: "flavors"
	},

	{
		name: "Cuisine",
		href: "cuisine"
	},

	{
		name: "Chicken",
		href: "chicken"
	},

	{
		name: "Dressing",
		href: "dressing"
	},

	{
		name: "Fried",
		href: "fried"
	},

	{
		name: "Fish",
		href: "fish"
	},

	{
		name: "Duck",
		href: "duck"
	},
];

for (let index in tagsContent) {
	tags.insertAdjacentHTML("beforeend", '<span href="#' + tagsContent[index].href + '">' + tagsContent[index].name + "</span>");
}

const tag = Array.from(document.querySelectorAll("#tags_content > span"));

tag.forEach(function (item, index) {
	item.addEventListener("click", function() {
		if (item.style.backgroundColor == "black") {
			item.style.backgroundColor = "white";
			item.style.color = "black";
		} else {
			item.style.backgroundColor = "black";
			item.style.color = "white";
		}
	});
});