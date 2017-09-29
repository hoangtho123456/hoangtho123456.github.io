/**
*Create the animation for lides in HTML
*@author danghoangtho1132@gmail.com (Đặng Hoàng Thọ)
*/
var SLIDE_INDEX = 0; //@SLIDE_INDEX is a value it increase or decrease follow the change of slides
var RETIMEOUT; //@RETIMEOUT is a value will reset time of a slide if you pick another slides
showDivs(SLIDE_INDEX); //function show slide animation.

/**
*when you click button ">" or "<":
*@value SLIDE_INDEX will increase (or decrease), 
  the current slide move the next (or move the before slide).
*/
function plusDivs(n) {
	showDivs(SLIDE_INDEX += n);
}
//Show the slide is corresponding to the selected bar shape
function currentDiv(n) {
	showDivs(SLIDE_INDEX = n - 1);
}
//show slide animation
function showDivs(n) {
	var i;
	var slide = document.getElementsByClassName("mySlides");
	var dots = document.getElementsByClassName("demo");
	if (n >= slide.length) { 
		SLIDE_INDEX = 0;
	}
	if (n < 0) {
		SLIDE_INDEX = slide.length - 1; 
	}
	for (i = 0; i < slide.length; i++) {
		slide[i].style.display = "none";
	}
	//dots is the img bar to choose the img
	for (i = 0; i < dots.length; i++) {
		dots[i].className = dots[i].className.replace(" sl-opacity-off", "");
	}
	slide[SLIDE_INDEX].style.display = "block";
	dots[SLIDE_INDEX].className += " sl-opacity-off"; 
	//use clearTimeout to reset the time of the slide is running.
	clearTimeout(RETIMEOUT);
	RETIMEOUT = setTimeout(function () { showDivs(SLIDE_INDEX += 1); }, 5000);
}