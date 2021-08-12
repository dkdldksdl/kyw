$(function(){
    //  btn-top

    // 클릭시 최상단으로 이동
    $(".btn_top").on("click",function(){$("html,body").animate({scrollTop:0},400);});
    // 500픽셀 도달시 등장
    $(window).scroll(function(){
        if($(this).scrollTop()>500){
            $(".btn_top").fadeIn();
        }else{
            $(".btn_top").fadeOut();
        }
    });
    // 
})