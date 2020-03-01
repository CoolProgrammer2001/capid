
$(document).ready(function(){
  $(".dropdown-trigger").dropdown();
  $('.sidenav').sidenav();
  $('.parallax').parallax();
  $('.modal').modal();
  $('select').formSelect();
  $(".slide-down").slideDown();
});

$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true,
  autoplay: true,
});
function autoplay() {
    $('.carousel').carousel('next');
    setTimeout(autoplay, 4500);
}

$(".main_ib").hover(function(){
  var imgurl = $(this).data("hoverimage");
  $(this).css("background-image", "url(" + imgurl + ")")
}, function(){
  $(this).css("background-image", "");
});
$(".main-service-block").hover(function(){
  var imgurl = $(this).data("hoverimage");
  $(this).css("background-image", "url(" + imgurl + ")")
}, function(){
  $(this).css("background-image", "");
});
$(".user-profile").click(function(){
  $(this).toggleClass("clicked");
});