$(function(){
    $(".sliderlist").children("div:gt(0)").hide();
    var x = 0;
    setInterval(function(){
        var next = (x +1)%3;
        $(".sliderlist").find("div").eq(x).fadeOut();
        $(".sliderlist").find("div").eq(next).fadeIn();
        x = next;
        console.log(x);
    },3000);

        // layerPopup
        
        $('.layerPopup').on('click',function(e){ 
            // .on -> 이벤트 등록 메서드 / 제이쿼리 1.7부터 적용  
            e.preventDefault(); // 링크차단 메서드 
            $('#popup').fadeIn(); // 서서희 나타남 / P374
        });

        $('.close').on('click',function(e){ 
            // .on -> 이벤트 등록 메서드 
            $('#popup').fadeOut(); // 서서희 사라짐
        });
});