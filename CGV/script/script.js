 $(function(){
    // quick menu //
    $(window).scroll(function(){
        var scrollTopNum = $(document).scrollTop()+45;
        if(scrollTopNum<=143){
            scrollTopNum=143;
        }
        $("#quick-inner").stop().animate({top: scrollTopNum}, 500);
        });
    });

    // slider //
    $(function(){                    
        $(".sliderList").children("div:gt(0)").hide();
        var x = 0;
        setInterval(function(){
            var next = (x + 1) % 3; 
            $(".sliderList").find("div").eq(x).fadeOut();
            $(".sliderList").find("div").eq(next).fadeIn();
            x = next;
            console.log(x);
        },3000);

    });
    // menu //
    $(function(){
        $(function(){
            $(".menu>ul").mouseenter(function(){
                $(".menu>ul>li>.m_bar").show();
            });
            $(".menu>ul").mouseleave(function(){
                $(".menu>ul>li>.m_bar").hide();
            });
        });
    });