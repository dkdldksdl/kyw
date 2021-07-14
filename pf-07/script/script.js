$(function(){
                // menu //
                $("nav>ul>li, .bg").mouseenter(function(){
                    $('.submenu, .bg').stop().slideDown();
                });
                $("nav>ul>li, .bg").mouseleave(function(){
                    $('.submenu, .bg').stop().slideUp();
                });
                // slider //
                    var x = 0;
                    setInterval(function(){
                        if(x<2){
                            x++; 
                        }else {
                            x = 0;
                        }
                        var sliderPosition = x*(-300)+"px";

                        $(".sliderList").animate({top:sliderPosition},400);     
                            console.log(x);  
                    },3000);
                    // popup //
                    $(".layerpopup").on('click',function(e){
                        e.preventDefault();
                        $("#popup").fadeIn();
                    });

                    $(".close").on('click',function(e){               
                        $("#popup").fadeOut();
                    });
});