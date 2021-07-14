// popup //
$(function(){
    $(".layerpopup").on('click',function(e){
        e.preventDefault();
        $("#popup").fadeIn();
    });

    $(".close").on('click',function(e){             
        $("#popup").fadeOut();
    });
// slider //
    var x = 0; 

    setInterval (function(){if(x<2) {x++;}

    else {x=0;}

    var result = (-800)*x+"px";

    $('.sliderList').animate({left:result},400);},3000);
});
