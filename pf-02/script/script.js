$(function(){
    //acoordion_menu
    
    //.slideDown - 선택 요소를 말아내리듯 노출
   //.slideUp - 선택 요소를 말아올리듯 숨김
    // $(".accordion-menu>ul>li").hover(function(){
    //     $(this).find(".submenu").stop().slideDown(500);},
    // function(){$(this).find(".submenu").stop().slideup(500);});
    
    $(function(){
        //.slideDown - 선택 요소를 말아내리듯 노출
       //.slideUp - 선택 요소를 말아올리듯 숨김
    // accordion_menu
        $(".accordion-menu>ul>li").hover(function(){
            $(this).find(".submenu").stop().slideDown(500);
        },
        function(){
            $(this).find(".submenu").stop().slideUp(500);
        }    
        );    
    });


// fade-in-out
$(".sliderList").children("div:gt(0)").hide();
var x=0;
// setInterval : 일정시간동안 반복하여 실행
setInterval(function(){
    var next = (x + 1)%3;
    // 0 + 1 = 1
    // 1 + 1 = 2
    // 2 + 1 = 3/0
    $(".sliderList").find("div").eq(x).fadeOut();
    $(".sliderList").find("div").eq(next).fadeIn();
    x = next;
    console.log(x); 
},3000); //3초   
});