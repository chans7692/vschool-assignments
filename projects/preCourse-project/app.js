// Open the Modal
function openModal_1() {
  document.getElementById('shadowbox1').style.display = "block";
}
function openModal_2() {
  document.getElementById('shadowbox2').style.display = "block";
}
function openModal_3() {
  document.getElementById('shadowbox3').style.display = "block";
}


// Close the Modal
function closeModal_1() {
  document.getElementById('shadowbox1').style.display = "none";
}
function closeModal_2() {
  document.getElementById('shadowbox2').style.display = "none";
}
function closeModal_3() {
  document.getElementById('shadowbox3').style.display = "none";
}


// slider
var slideshow1 = document.getElementById("slideshow1");
slideshow1.currentSlideIndex = 1;
showSlides(slideshow1.currentSlideIndex, slideshow1);

var slideshow2 = document.getElementById("slideshow2");
slideshow2.currentSlideIndex = 1;
showSlides(slideshow2.currentSlideIndex, slideshow2);

var slideshow3 = document.getElementById("slideshow3");
slideshow3.currentSlideIndex = 1;
showSlides(slideshow3.currentSlideIndex, slideshow3);

// Next/previous controls
function plusSlides(n, slideshow) {
  showSlides(slideshow.currentSlideIndex += n, slideshow);
}
// Thumbnail image controls
function currentSlide(n, slideshow) {
  showSlides(slideshow.currentSlideIndex = n, slideshow);
}

function showSlides(n, slideshow) {
  var i;
  var slides = slideshow.getElementsByClassName("slides");
  var dots = slideshow.getElementsByClassName("demo");
  if (n > slides.length) {slideshow.currentSlideIndex = 1}    
  if (n < 1) {slideshow.currentSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideshow.currentSlideIndex-1].style.display = "block";  
  dots[slideshow.currentSlideIndex-1].className += " active";
}

