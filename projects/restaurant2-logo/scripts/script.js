function modalMenu() { 
	const menu = document.getElementById("menu");
	const dialog = document.getElementById("dialogMenu");
	const button = document.getElementById("button1");

	menu.addEventListener("click", () => {
		dialog.showModal();
	});
	
	button.addEventListener("click", () => {
		dialog.close();
	});
}

function modalContact() {
	const contact = document.getElementById("contact");
	const dialog = document.getElementById("dialogContact");
	const button = document.getElementById("button2");
	
	contact.addEventListener("click", () => {
		dialog.showModal();
	});
	
	button.addEventListener("click", () => {
		dialog.close();
	});
}

modalMenu();
modalContact();