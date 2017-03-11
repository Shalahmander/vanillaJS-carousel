$(function() {
	$('body').scrollspy({ target: '#navbar6'})

	smoothScroll(400);

	function smoothScroll (duration) {
	$('a[href^="#"]').on('click', function(event) {

	    const target = $( $(this).attr('href') );

	    if( target.length ) {
	        event.preventDefault();
	        $('html, body').animate({
	            scrollTop: target.offset().top
	        }, duration);
	    }
	});
}
'use strict';
//ustalenie elementu aktywnego
const activeEl = document.getElementsByClassName('active')[0];
const slideList = document.getElementsByClassName('slide-unit');
let activeElIndex = Array.from(activeEl.parentNode.children).indexOf(activeEl);
//ustawienie elementow w sliderze
function sliderFunction(newActiveElIndex){
  if (newActiveElIndex != activeElIndex){
        slideList[activeElIndex].classList.remove('active');
        slideList[newActiveElIndex].classList.add('active');
        activeElIndex = newActiveElIndex;
      }
  for (let i = 0; i < slideList.length; i++){
    if (newActiveElIndex < i){
      slideList[i].style.left = (i-newActiveElIndex-1)*21.25 + 36.25 +"vw";
    } else if (newActiveElIndex > i){
      slideList[i].style.left = (i-newActiveElIndex)*21.25 +"vw";
    } else {
      slideList[i].style.left = 0 +"vw";
    }
  }
}

sliderFunction(activeElIndex);

 for (let i = 0; i < slideList.length; i++){
 	slideList[i].addEventListener('click', function(){sliderFunction(i);}, false);
 }


});