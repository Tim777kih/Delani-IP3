$(".card").hover(function(){
  $(this).children(".qwork").fadeToggle(1000);
});


$(document).ready(function () {
    $(".qdesign").click(function () {
        $(".inn").toggle();
        $(".qdesign").click(function(){
            $(".inn").toggle();
        })
        

    });
});


  

