var button_enter = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
var button_delete = document.getElementsByClassName("delete");
var li = document.getElementsByTagName("li");

function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	li.appendChild(document.createTextNode(input.value));
	//add button to the item
	var button = document.createElement("button");
	button.appendChild(document.createTextNode("delete"));
	button.classList.add("delete");
	button.addEventListener("click", deleteElementAfterClick);
	li.appendChild(button);
	//
	ul.appendChild(li);

	input.value = "";
}

function addListAfterClick() {
	if (inputLength() > 0) {
		createListElement();
	}
}

function addListAfterKeypress(event) {
	if (inputLength() > 0 && event.keyCode === 13) {
		createListElement();
	}
}

function deleteElementAfterClick() {
	this.parentElement.remove();
}

function lineThroughAfterClick () {
	this.classList.toggle("done");
}

button_enter.addEventListener("click", addListAfterClick);

input.addEventListener("keypress", addListAfterKeypress);

for (var i = 0; i < button_delete.length; i++) {
	button_delete[i].addEventListener("click", deleteElementAfterClick);
}

for (var i = 0; i < button_delete.length; i++) {
	li[i].addEventListener("click", lineThroughAfterClick);
}