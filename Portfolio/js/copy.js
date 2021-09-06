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