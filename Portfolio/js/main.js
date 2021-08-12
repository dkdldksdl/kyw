$(function(){
    //  ========== btn-top ==========

    // === 버튼 클릭시 최상단으로 이동 === 
    $(".btn_top").on("click",function(){$("html,body").animate({scrollTop:0},400);});
    // === 500픽셀 도달시 등장 ===
    $(window).scroll(function(){
        if($(this).scrollTop()>500){
            $(".btn_top").fadeIn();
        }else{
            $(".btn_top").fadeOut();
        }
    });
    // === 각 메뉴 클릭시 컨텐츠 영역의 아이디값을 가진 컨텐츠로 이동 ===
    $(".header_main>ul>li:nth-child(1)").on("click",function(){
        var about = $("#skill").position(); // skill의 위치값을 about에 저장
        $("html, body").animate({
            scrollTop: about.top - 80
        },400);
        
    });
    $(".header_main>ul>li:nth-child(2)").on("click",function(){
        var about = $("#portfolio").position(); // portfolio의 위치값을 about에 저장
        $("html, body").animate({
            scrollTop: about.top - 80
        },400);

    });
    $(".header_main>ul>li:nth-child(3)").on("click",function(){
        var about = $("#etc").position(); // etc의 위치값을 about에 저장
        $("html, body").animate({
            scrollTop: about.top - 80
        },400);
    });

    // === 스크롤 이동시 자동으로 매뉴색과 라인색 변경 ===
    $(window).scroll(function(){
        var height = $(document).scrollTop();
        if (height >= 560 && height <= 1120){
            $(".header_main>ul>li").removeClass("on on2")
            $(".header_main>ul>li:nth-child(1)").addClass("on on2")
        }else if (height >= 1121 && height <= 5049){
        $(".header_main>ul>li").removeClass("on on2")
        $(".header_main>ul>li:nth-child(2)").addClass("on on2")
        }else if (height >= 5050){
            $(".header_main>ul>li").removeClass("on on2")
            $(".header_main>ul>li:nth-child(3)").addClass("on on2")
        }else {$(".header_main>ul>li").removeClass("on on2");}
    });
    // ========== POPUP ==========
    
    // === #popup1 -클릭시 이미지 + 화산표 나타나고 사라짐 ===
    $("#etc>.etc_main>.etc_1").on("click",function(e){
        e.preventDefault(); // 링크차단
        $("#popup>.popup_main>.bg").fadeIn()
        $("#popup>.popup_main>#popup1").fadeIn()
        $("#popup>.popup_main>#popup1>button").fadeIn()
    });
    // === 이미지 안에 마우스가 들어오면 컨텐츠 + 버튼 나타남 ===
    $("#popup>.popup_main>#popup1").mouseenter(function(){
        $("#popup>.popup_main>#popup1>button").stop().fadeIn()
    });
    // === 이미지 안에 마우스가 나가면 컨텐츠 + 버튼 사라짐 ===
    $("#popup>.popup_main>#popup1").mouseleave(function(){
        $("#popup>.popup_main>#popup1>button").stop().fadeOut()
    });
    // === bg 클릭시 POPUP창 사라짐 ===
    $("#popup>.popup_main>.bg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut();
        $("#popup>.popup_main>#popup1").fadeOut();
        $("#popup>.popup_main>#popup1>button").fadeOut();
    });

    // === 이미지 클릭시 POPUP창 사라짐 ===
    $("#popup>.popup_main>#popup1>.popList>.popImg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut()
        $("#popup>.popup_main>#popup1").fadeOut()
        $("#popup>.popup_main>#popup1>button").fadeOut()
    });

    // === #popup1 -slide ===
    var max = 0;
    var current = 0; 
    var container; // 선언 

    function animate($direction){
         // $direction 의 파라미터를 받아서 처리
        if($direction == "next") { //받아온 값이 next이면, if문 실행
            $(container.children()[1]).css("margin-left","800px");
            container.append(container.children()[0]);
            // container.children()[0] 객체를  container객체의 마지막에 추가
            TweenMax.to(container.children()[0],0.8,{
                marginLeft:0,
                ease:Expo.easeOut
            }); // 동작 애니메이션          
        } else if($direction == "prev"){ //받아온 값이 prev이면, if문 실행
            container.prepend(container.children()[max - 1]);
            $(container.children()[0]).css("margin-left","-800px");
            TweenMax.to(container.children()[0],0.8,{
                marginLeft:0,
                ease:Expo.easeOut
            }); // 동작 애니메이션 
        }
    };


    function prev() {current--;if (current < 0) current = max - 1;animate("prev");} // "prev" 파라미터 받음 
    function next() {current++;if (current > max -1) current - 0;animate("next");} // "next" 파라미터 받음 
    function events() {$("#popup>.popup_main>#popup1>button.prev").on("click", prev); // .prev 버튼 클릭시 prev 함수 호출
    $("#popup>.popup_main>#popup1>button.next").on("click", next);} // .next 버튼 클릭시 next 함수 호출
    

    function init() {container = $("#popup>.popup_main>#popup1>.popList"); max = container.children().length;// .length - 갯수저장 // .children() -> 후손x / 자식 O
        container.css("margin-left","-800px");
        container.prepend(container.children()[max - 1]);
        events();};
     // .prepend() : 선택한 요소 내의 앞 위치에 새 요소 생성    
     // .append() : 선택한 요소 내의 마지막 위치에 새 요소 생성    
     // css - :after / :before와 동일    

    $(document).ready(init);
    // 브라우저가 DOM트리를 생성한 후 init 실행
});


// ====== #popup2 ======

$(function(){
    // === #popup2 -클릭시 이미지 + 화산표 나타나고 사라짐 ===
    $("#etc>.etc_main>.etc_2").on("click",function(e){
        e.preventDefault(); // 링크차단
        $("#popup>.popup_main>.bg").fadeIn()
        $("#popup>.popup_main>#popup2").fadeIn()
        $("#popup>.popup_main>#popup2>button").fadeIn()
    });
    // === 이미지 안에 마우스가 들어오면 컨텐츠 + 버튼 나타남 ===
    $("#popup>.popup_main>#popup2").mouseenter(function(){
        $("#popup>.popup_main>#popup2>button").stop().fadeIn()
    });
    // === 이미지 안에 마우스가 나가면 컨텐츠 + 버튼 사라짐 ===
    $("#popup>.popup_main>#popup2").mouseleave(function(){
        $("#popup>.popup_main>#popup2>button").stop().fadeOut()
    });
    // === bg 클릭시 POPUP창 사라짐 ===
    $("#popup>.popup_main>.bg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut();
        $("#popup>.popup_main>#popup2").fadeOut();
        $("#popup>.popup_main>#popup2>button").fadeOut();
    });

    // === 이미지 클릭시 POPUP창 사라짐 ===
    $("#popup>.popup_main>#popup2>.popList>.popImg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut()
        $("#popup>.popup_main>#popup2").fadeOut()
        $("#popup>.popup_main>#popup2>button").fadeOut()
    });

    // === #popup2 -slide ===
    var max = 0;
    var current = 0; 
    var container; // 선언 

    function animate($direction){
         // $direction 의 파라미터를 받아서 처리
        if($direction == "next") { //받아온 값이 next이면, if문 실행
            $(container.children()[1]).css("margin-left","800px");
            container.append(container.children()[0]);
            // container.children()[0] 객체를  container객체의 마지막에 추가
            TweenMax.to(container.children()[0],0.8,{
                marginLeft:0,
                ease:Expo.easeOut
            }); // 동작 애니메이션          
        } else if($direction == "prev"){ //받아온 값이 prev이면, if문 실행
            container.prepend(container.children()[max - 1]);
            $(container.children()[0]).css("margin-left","-800px");
            TweenMax.to(container.children()[0],0.8,{
                marginLeft:0,
                ease:Expo.easeOut
            }); // 동작 애니메이션 
        }
    };


    function prev() {current--;if (current < 0) current = max - 1;animate("prev");} // "prev" 파라미터 받음 
    function next() {current++;if (current > max -1) current - 0;animate("next");} // "next" 파라미터 받음 
    function events() {$("#popup>.popup_main>#popup2>button.prev").on("click", prev); // .prev 버튼 클릭시 prev 함수 호출
    $("#popup>.popup_main>#popup2>button.next").on("click", next);} // .next 버튼 클릭시 next 함수 호출
    

    function init() {container = $("#popup>.popup_main>#popup2>.popList"); max = container.children().length;// .length - 갯수저장 // .children() -> 후손x / 자식 O
        container.css("margin-left","-800px");
        container.prepend(container.children()[max - 1]);
        events();};
     // .prepend() : 선택한 요소 내의 앞 위치에 새 요소 생성    
     // .append() : 선택한 요소 내의 마지막 위치에 새 요소 생성    
     // css - :after / :before와 동일    

    $(document).ready(init);
    // 브라우저가 DOM트리를 생성한 후 init 실행
});
// ====== #popup3 ======

$(function(){
    // === #popup3 -클릭시 이미지 + 화산표 나타나고 사라짐 ===
    $("#etc>.etc_main>.etc_3").on("click",function(e){
        e.preventDefault(); // 링크차단
        $("#popup>.popup_main>.bg").fadeIn()
        $("#popup>.popup_main>#popup3").fadeIn()
        $("#popup>.popup_main>#popup3>button").fadeIn()
    });
    // === 이미지 안에 마우스가 들어오면 컨텐츠 + 버튼 나타남 ===
    $("#popup>.popup_main>#popup3").mouseenter(function(){
        $("#popup>.popup_main>#popup3>button").stop().fadeIn()
    });
    // === 이미지 안에 마우스가 나가면 컨텐츠 + 버튼 사라짐 ===
    $("#popup>.popup_main>#popup3").mouseleave(function(){
        $("#popup>.popup_main>#popup3>button").stop().fadeOut()
    });
    // === bg 클릭시 POPUP창 사라짐 ===
    $("#popup>.popup_main>.bg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut();
        $("#popup>.popup_main>#popup3").fadeOut();
        $("#popup>.popup_main>#popup3>button").fadeOut();
    });

    // === 이미지 클릭시 POPUP창 사라짐 ===
    $("#popup>.popup_main>#popup3>.popList>.popImg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut()
        $("#popup>.popup_main>#popup3").fadeOut()
        $("#popup>.popup_main>#popup3>button").fadeOut()
    });

    // === #popup3 -slide ===
    var max = 0;
    var current = 0; 
    var container; // 선언 

    function animate($direction){
         // $direction 의 파라미터를 받아서 처리
        if($direction == "next") { //받아온 값이 next이면, if문 실행
            $(container.children()[1]).css("margin-left","800px");
            container.append(container.children()[0]);
            // container.children()[0] 객체를  container객체의 마지막에 추가
            TweenMax.to(container.children()[0],0.8,{
                marginLeft:0,
                ease:Expo.easeOut
            }); // 동작 애니메이션          
        } else if($direction == "prev"){ //받아온 값이 prev이면, if문 실행
            container.prepend(container.children()[max - 1]);
            $(container.children()[0]).css("margin-left","-800px");
            TweenMax.to(container.children()[0],0.8,{
                marginLeft:0,
                ease:Expo.easeOut
            }); // 동작 애니메이션 
        }
    };


    function prev() {current--;if (current < 0) current = max - 1;animate("prev");} // "prev" 파라미터 받음 
    function next() {current++;if (current > max -1) current - 0;animate("next");} // "next" 파라미터 받음 
    function events() {$("#popup>.popup_main>#popup3>button.prev").on("click", prev); // .prev 버튼 클릭시 prev 함수 호출
    $("#popup>.popup_main>#popup3>button.next").on("click", next);} // .next 버튼 클릭시 next 함수 호출
    

    function init() {container = $("#popup>.popup_main>#popup3>.popList"); max = container.children().length;// .length - 갯수저장 // .children() -> 후손x / 자식 O
        container.css("margin-left","-800px");
        container.prepend(container.children()[max - 1]);
        events();};
     // .prepend() : 선택한 요소 내의 앞 위치에 새 요소 생성    
     // .append() : 선택한 요소 내의 마지막 위치에 새 요소 생성    
     // css - :after / :before와 동일    

    $(document).ready(init);
    // 브라우저가 DOM트리를 생성한 후 init 실행
});

// ====== #popup4 ======

$(function(){
    // === #popup4 -클릭시 이미지 + 화산표 나타나고 사라짐 ===
    $("#etc>.etc_main>.etc_4").on("click",function(e){
        e.preventDefault(); // 링크차단
        $("#popup>.popup_main>.bg").fadeIn()
        $("#popup>.popup_main>#popup4").fadeIn()
        $("#popup>.popup_main>#popup4>button").fadeIn()
    });
    // === 이미지 안에 마우스가 들어오면 컨텐츠 + 버튼 나타남 ===
    $("#popup>.popup_main>#popup4").mouseenter(function(){
        $("#popup>.popup_main>#popup4>button").stop().fadeIn()
    });
    // === 이미지 안에 마우스가 나가면 컨텐츠 + 버튼 사라짐 ===
    $("#popup>.popup_main>#popup4").mouseleave(function(){
        $("#popup>.popup_main>#popup4>button").stop().fadeOut()
    });
    // === bg 클릭시 POPUP창 사라짐 ===
    $("#popup>.popup_main>.bg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut();
        $("#popup>.popup_main>#popup4").fadeOut();
        $("#popup>.popup_main>#popup4>button").fadeOut();
    });

    // === 이미지 클릭시 POPUP창 사라짐 ===
    $("#popup>.popup_main>#popup4>.popList>.popImg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut()
        $("#popup>.popup_main>#popup4").fadeOut()
        $("#popup>.popup_main>#popup4>button").fadeOut()
    });

    // === #popup4 -slide ===
    var max = 0;
    var current = 0; 
    var container; // 선언 

    function animate($direction){
         // $direction 의 파라미터를 받아서 처리
        if($direction == "next") { //받아온 값이 next이면, if문 실행
            $(container.children()[1]).css("margin-left","800px");
            container.append(container.children()[0]);
            // container.children()[0] 객체를  container객체의 마지막에 추가
            TweenMax.to(container.children()[0],0.8,{
                marginLeft:0,
                ease:Expo.easeOut
            }); // 동작 애니메이션          
        } else if($direction == "prev"){ //받아온 값이 prev이면, if문 실행
            container.prepend(container.children()[max - 1]);
            $(container.children()[0]).css("margin-left","-800px");
            TweenMax.to(container.children()[0],0.8,{
                marginLeft:0,
                ease:Expo.easeOut
            }); // 동작 애니메이션 
        }
    };


    function prev() {current--;if (current < 0) current = max - 1;animate("prev");} // "prev" 파라미터 받음 
    function next() {current++;if (current > max -1) current - 0;animate("next");} // "next" 파라미터 받음 
    function events() {$("#popup>.popup_main>#popup4>button.prev").on("click", prev); // .prev 버튼 클릭시 prev 함수 호출
    $("#popup>.popup_main>#popup4>button.next").on("click", next);} // .next 버튼 클릭시 next 함수 호출
    

    function init() {container = $("#popup>.popup_main>#popup4>.popList"); max = container.children().length;// .length - 갯수저장 // .children() -> 후손x / 자식 O
        container.css("margin-left","-800px");
        container.prepend(container.children()[max - 1]);
        events();};
     // .prepend() : 선택한 요소 내의 앞 위치에 새 요소 생성    
     // .append() : 선택한 요소 내의 마지막 위치에 새 요소 생성    
     // css - :after / :before와 동일    

    $(document).ready(init);
    // 브라우저가 DOM트리를 생성한 후 init 실행
});

// ====== #popup5 ======

$(function(){
    // === #popup5 -클릭시 이미지 + 화산표 나타나고 사라짐 ===
    $("#etc>.etc_main>.etc_5").on("click",function(e){
        e.preventDefault(); // 링크차단
        $("#popup>.popup_main>.bg").fadeIn()
        $("#popup>.popup_main>#popup5").fadeIn()
        $("#popup>.popup_main>#popup5>button").fadeIn()
    });
    // === 이미지 안에 마우스가 들어오면 컨텐츠 + 버튼 나타남 ===
    $("#popup>.popup_main>#popup5").mouseenter(function(){
        $("#popup>.popup_main>#popup5>button").stop().fadeIn()
    });
    // === 이미지 안에 마우스가 나가면 컨텐츠 + 버튼 사라짐 ===
    $("#popup>.popup_main>#popup5").mouseleave(function(){
        $("#popup>.popup_main>#popup5>button").stop().fadeOut()
    });
    // === bg 클릭시 POPUP창 사라짐 ===
    $("#popup>.popup_main>.bg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut();
        $("#popup>.popup_main>#popup5").fadeOut();
        $("#popup>.popup_main>#popup5>button").fadeOut();
    });

    // === 이미지 클릭시 POPUP창 사라짐 ===
    $("#popup>.popup_main>#popup5>.popList>.popImg").on("click",function(){
        $("#popup>.popup_main>.bg").fadeOut()
        $("#popup>.popup_main>#popup5").fadeOut()
        $("#popup>.popup_main>#popup5>button").fadeOut()
    });

    // === #popup5 -slide ===
    var max = 0;
    var current = 0; 
    var container; // 선언 

    function animate($direction){
         // $direction 의 파라미터를 받아서 처리
        if($direction == "next") { //받아온 값이 next이면, if문 실행
            $(container.children()[1]).css("margin-left","800px");
            container.append(container.children()[0]);
            // container.children()[0] 객체를  container객체의 마지막에 추가
            TweenMax.to(container.children()[0],0.8,{
                marginLeft:0,
                ease:Expo.easeOut
            }); // 동작 애니메이션          
        } else if($direction == "prev"){ //받아온 값이 prev이면, if문 실행
            container.prepend(container.children()[max - 1]);
            $(container.children()[0]).css("margin-left","-800px");
            TweenMax.to(container.children()[0],0.8,{
                marginLeft:0,
                ease:Expo.easeOut
            }); // 동작 애니메이션 
        }
    };


    function prev() {current--;if (current < 0) current = max - 1;animate("prev");} // "prev" 파라미터 받음 
    function next() {current++;if (current > max -1) current - 0;animate("next");} // "next" 파라미터 받음 
    function events() {$("#popup>.popup_main>#popup5>button.prev").on("click", prev); // .prev 버튼 클릭시 prev 함수 호출
    $("#popup>.popup_main>#popup5>button.next").on("click", next);} // .next 버튼 클릭시 next 함수 호출
    

    function init() {container = $("#popup>.popup_main>#popup5>.popList"); max = container.children().length;// .length - 갯수저장 // .children() -> 후손x / 자식 O
        container.css("margin-left","-800px");
        container.prepend(container.children()[max - 1]);
        events();};
     // .prepend() : 선택한 요소 내의 앞 위치에 새 요소 생성    
     // .append() : 선택한 요소 내의 마지막 위치에 새 요소 생성    
     // css - :after / :before와 동일    

    $(document).ready(init);
    // 브라우저가 DOM트리를 생성한 후 init 실행
});

