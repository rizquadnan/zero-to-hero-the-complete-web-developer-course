var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");

function inputLength() {
	return input.value.length;
}

function toggleDone(el) {
	el.classList.toggle("done");
}

function createListElement() {
	var li = document.createElement("li");
	var span = document.createElement("span");
	var deleteButton = document.createElement("button");

	span.appendChild(document.createTextNode(input.value));
	span.addEventListener("click", () => {
		toggleDone(li);
	});

	deleteButton.appendChild(document.createTextNode("Delete"));
	deleteButton.addEventListener("click", () => {
		li.remove();
	});

	li.appendChild(span);
	li.appendChild(deleteButton);

	ul.appendChild(li);
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
		input.value = "";
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
		input.value = "";
	}
}

button.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

window.onload = () => {
	var listItems = ul.children;

	for (const item of listItems) {
		let contentText = item.children[0];
		contentText.addEventListener("click", () => {
			toggleDone(contentText);
		})

		let deleteButton = item.children[1];
		deleteButton.addEventListener("click", () => {
			item.remove();
		})
	}
}