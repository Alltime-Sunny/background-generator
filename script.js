var button = document.getElementById("enter");
var input = document.getElementById("userinput");
var ul = document.querySelector("ul");
let toggleLi=document.querySelectorAll("li");
let deleteBu=document.querySelectorAll(".bu_li");


function inputLength() {
	return input.value.length;
}

function createListElement() {
	var li = document.createElement("li");
	var bu = document.createElement("button");
	li.appendChild(document.createTextNode(input.value));
	bu.appendChild(document.createTextNode("delete"));
	ul.appendChild(li);
	ul.appendChild(bu);
	li.addEventListener("click", selectLi);
	bu.className=("bu_li");
	toggleLi=document.querySelectorAll("li");
	deleteBu=document.querySelectorAll(".bu_li");
	deleteBu[deleteBu.length-1].addEventListener("click", () => removeLi(deleteBu.length-1));
	input.value = "";
		
}

function removeLi (i) {
	console.log('LI', toggleLi)
	toggleLi[i].parentNode.removeChild(toggleLi[i]);
	deleteBu[i].parentNode.removeChild(deleteBu[i]);
	// bu.removeChild(bu);
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

button.addEventListener("click", addListAfterClick);
input.addEventListener("keypress", addListAfterKeypress);

function selectLi () {
	this.classList.toggle("done");
}

for (let i=0; i<toggleLi.length; i++) {
	toggleLi[i].addEventListener("click", selectLi);
	deleteBu[i].addEventListener("click", () => removeLi(i));
}



