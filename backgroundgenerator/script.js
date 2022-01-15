var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.querySelector(".random");

function setGradient() {
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")";
};
function setCssText() {
	css.textContent = body.style.background + ";";
}
function getRandomHexColor () {
	return `#${Math.floor(Math.random()*16777215).toString(16)}`;
}

color1.addEventListener("input", function() {
	setGradient();
	setCssText();
});

color2.addEventListener("input", function() {
	setGradient();
	setCssText();
});

randomButton.addEventListener("click", function() {
	color1.value = getRandomHexColor();
	color2.value = getRandomHexColor();

	setGradient();
	setCssText();
});

window.onload = function() {
	setGradient();
	setCssText();
};