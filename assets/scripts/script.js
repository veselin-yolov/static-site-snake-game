// Падащи менюта при малка резолюция
$(document).ready(function(){
	$("a#menu1").click(function () {
		$("ul#sub1").show();
		$("ul#sub2").hide();
	});
	$("a#menu2").click(function () {
		$("ul#sub2").show();
		$("ul#sub1").hide();
	});

	// Бутон за смяна на езика
	$("button#lang").click(function () {
		$(this, "span").fadeOut(function () {
			$(this, "span").text(($(this, "span").text() == 'EN') ? 'BG' : 'EN').fadeIn();
		});
	});
});
// Слайдшоу
var myIndex = 0;
carousel();
function carousel() {
	var i;
	var x = document.getElementsByClassName("mySlides");
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";  
	}
	myIndex++;
	if (myIndex > x.length) {
		myIndex = 1
	}
	x[myIndex-1].style.display = "block";  
	setTimeout(carousel, 3000);
}