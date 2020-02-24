$(".card").hover(function () {
  $(this).children(".qwork").fadeToggle(1000);
});
$(document).ready(function () {
  $(".ddesign").click(function () {
    $(this).children(".devinn").toggle();
    $(this).children(".dd").toggle();
  })
});