$(function(){

////////////////////////////////////////////////// pc 언어상자 

				var $input=$("input#lang"); // input상자 
				var $arrow=$(".opt span.arrow"); // 화살표 
				var $langlist=$(".langlist"); // 리스트 전체 

				$langlist.find("a").on("click",function(){
					$input.val($(this).text()); // 언어 선택시 입력상자 내용 변경
					$(this).parent().addClass("on").siblings().removeClass("on");
					// 이벤트발생한 a의 부모인 li에 on 클래스 생성 
					$langlist.toggle(); // 언어목록 숨김처리
				});
				$input.add($arrow).on("click",function(){
					$langlist.toggle(); 
					$arrow.toggleClass("arrow-up");
				});
				$(".opt").on("mouseleave",function(){
					$langlist.hide();
					$arrow.removeClass("arrow-up");
				});
});


////////////////////////////////////////////////// Mobile 언어상자 

			// .one() : 딱 한번만 실행되는 메서드
			// strFome : 문자열 변수 


			$(function(){
				$(window).one("load",function(){
					var strForm = '<form action="#" name="frmLang" method="post"><fieldset><legend>다국어서비스</legend> <label for="langsrv" class="blind">언어선택</label><select name="langsrv" id="langsrv"></select></fieldset></form>';
					$("footer>.fContainer>address").before(strForm);
				 
					// .before 이전위치 
					// .each 순차적으로 하나씩 접근
					$(".langlist>li>a").each(function(idx){
						var optCont='<option value="'+idx+'">'+$(this).text()+'</option>';
						$("#langsrv").append(optCont)
						// .append() : 선택한 요소의 마지막 위치에 새 클래스 생성
					});
			   
			   
				});
			});


////////////////////////////////////////////////// 메인슬라이딩


$(function(){
	var $mainbanrSwipe=document.getElementById("sliderSwiper");
// swipe영역 : swipe.js를 쓰려면 원래방식의 스크립트 문법으로 써줘야함 (이거 하나만)
	var $indicator=$("#sliderSwiper~.mainbanr-pagination>li>a");
	var nowIdx=Math.floor(Math.random()*4); 
	// 현재 보이는 슬라이드의 index번호 
	var oldIdx=nowIdx; //nowIdx 값을 oldIdx에 넣어줌
	var intervalID=null; // 현재의 값을 알 수 없다. 
	// null은, 변수에 지정된 데이터를 지우고자할때 사용 
	
	var noEventTime=0; // 이벤트가 없는 시간(초)을 채크하는 변수
	var $btnAuto=$("#sliderSwiper~.btn_auto") // 시작, 정지버튼
	$btnAuto.data("state","on"); 
	// 버튼의 내부데이터 설정 - on : 재생, off : 정지
	 



// 1단계 = 인디케이터 클릭 이벤트 설정 

$indicator.on("click",function(evt){
	nowIdx=$indicator.index($(this));
	if(oldIdx != nowIdx){
		move(); // 슬라이드 애니메이트 (swipe) 함수 호출
	}
	// != : 다르다
	autoStateChange(); // 자동재생 상태변환 함수호출
	evt.preventDefault(); // 링크차단
});

// 2단계 = swipe.js 플러그인을 이용한 슬라이드 이동
window.swipeArea=Swipe($mainbanrSwipe,{
	callback:function(idx){
		setIndicator(idx); // 인디케이터 활성화 함수 호출
	} // swipeArea 슬라이드 메소드가 실행 완료된 시점에 작동할 콜백함수 등록	
});

// 3단계 = 슬라이드 애니메이트(swipe)!!!!! 중요 
function move(){
	swipeArea.slide(nowIdx,400);
	// 클릭시 슬라이딩 이동 속도 swipe.js 플러그인의 옵션 메서드인 .slide(슬라이드인덱스, 속도시간)를 활용하여 배너 이동
	setIndicator(nowIdx); // 인디케이터 활성화 함수 호출
	oldIdx=nowIdx;
}

// 4단계 = 인디케이터 활성화 표시 
function setIndicator(idx){
	$indicator.eq(idx).parent().addClass("on").siblings().removeClass("on");
}
// 5단계 = 텍스트와 이미지 로드 
$(window).on("load",function(){
	setIndicator(nowIdx); // 인디케이터 활성화 표시 함수 호출
	swipeArea.slide(nowIdx,400);
	autoPlay();
	timeCheck(); // 10초 간격의 시간채크 함수 호출

});
// 6단계 = 이전버튼설정
$(".mainbanr-prev").on("click",function(evt){
	autoStateChange();
	prevIdx(); 
	move(); 
	autoStop(); 
	$btnAuto.data("state","on").trigger("click");
	// .trigger() : 강제로 특정 이벤트 발생
	evt.preventDefault();
});

// 7단계 = 다음버튼설정
$(".mainbanr-next").on("click",function(evt){
	autoStateChange();
	nextIdx(); 
	move(); 
	autoStop(); 
	$btnAuto.data("state","on").trigger("click");
	// .trigger() : 강제로 특정 이벤트 발생
	evt.preventDefault();
});

// 8단계 = 이전 + 다음 인덱스번호 설정 

// 이전 
function prevIdx(){
	if(nowIdx<1){
		nowIdx=$indicator.size()-1;
	}else{
		nowIdx--;
	}
}
// 다음 
function nextIdx(){
	if(nowIdx>=$indicator.size()-1){
		nowIdx=0;
	}else{
		nowIdx++;
	}
	return nowIdx;
}

// 9단계 =  자동재생
function autoPlay(){
	intervalID=setInterval(function(){
		swipeArea.slide(nextIdx(),400)
	},3000);
}
// 10단계 = 재생정지 
function autoStop(){
	clearInterval(intervalID);
	// clearInterval : setInterval 삭제
	$btnAuto.removeClass("pause").text("재생시작").data("state","off");
}

// 11단계 = 재생정지버튼에 클릭이벤트설정 
$btnAuto.on("click",function(evt){
	var stateVal=null;
	if($(this).data("state")=="on"){
		$(this).removeClass("pause").text("재생시작");
		stateVal="off"; // 내부 데이터의 값을 off 한다
		autoStop(); // 자동재생, 정지 함수 호출
		noEventTime=0; // 이벤트 시간채크 변수 초기화
	}else{
		$(this).addClass("pause").text("일시정지");
		stateVal="on"; // 내부 데이터값 on으로 한다
		autoPlay(); // 자동재생 함수 호출
	}
	$(this).data("state",stateVal);
	evt.preventDefault();

	// == 같다 
});

// 12단계 = 4초 간격의 시간채크 
function timeCheck(){
	setInterval(function(){
		noEventTime++;
		if(noEventTime>4&&$btnAuto.data("state")=="off"){
			$btnAuto.trigger("click");
		}
		// && : 그리고 (논리연산자)
	},1000);
}


// 13단계 = 자동재생 상태변환함수

function autoStateChange(){
	noEventTime=0; // 이벤트 시간체크 변수 초기화
	autoStop(); // 자동재생 정지 함수 호출
}

});


// .siblings() : 형제요소 선택 
// 변수 (특수기호) : $  _ 
// .add()  : 추가 
// .before()  : 선택 요소 이전 위치에 새 요소 생성 
// .after()  : 다음 위치에 새 요소 생성 
// .toggleClass() : 지정한 클래스가 없으면 생성, 있으면 없앰
// .trigger() : 강제로 특정 이벤트 발생 
// str : 문자열 변수 
// .append() : 선택한 요소의 마지막 위치에 새 클래스 생성
// .each() : 여러개의 요소에 순차적으로 하나씩 접근 
// .toggle() : 선택한 요소가 보이면 숨기고, 숨겨져있으면 나타냄
// .val() : input 속성 중 텍스트 변경 
// .random() : 0 ~ 1 사이에 난수 반환 
// Math.floor : 소수점 첫째자리에서 내림하여 정수 반환 

////////////////////////////////////////////////// 메인메뉴

// scroll 이벤트와 scrollTop()을 이용한 원페이지 구현

$(function(){
	var $topmenu=$(".gnb>li>a");
	var gapH=0; //가로폭에 따른 탑메뉴 높이값 저장 변수

	// 1단계 - 메인슬라이딩과 article의 탑 값을 배열에 저장
	var arrContH=new Array(); // 빈 배열 선언
	function setPosArticle(){
		arrContH=[]; // 배열 비우기
		arrContH.push($("header+hr+section").offset().top); // 메인 배너의 높이값 추가

		$("#mainsrv>article").each(function(idx){
			arrContH.push($(this).offset().top);
		});
		// article이 시작하는 y좌표값을 동적으로 배열에 저장
		// article의 높이가 변하더라도 정확하게 시작점으로 스크롤한다.
	}
	// 2단계 - 스크롤 높이값에 따른 메뉴의 롤오버 색상 변화
	$(window).on("scroll",function(){
		var scrollH=$(this).scrollTop(); // 현재 스크롤 탑값
		for(var i=0;i<$topmenu.size();i++){
			if(scrollH>=arrContH[i+1]-gapH){
				$topmenu.eq(i).parent().addClass("on").siblings().removeClass("on")

			}else if(scrollH<arrContH[1]-gapH){
				$topmenu.parent().removeClass("on");
			}
		}
	});
	// 3단계 - 메뉴 클릭시 article 영역 애니메이션으로 올라감
	$topmenu.on("click",function(evt){
		var nowIdx=$topmenu.index($(this));
		$("html,body").stop().animate({
			scrollTop : arrContH[nowIdx+1]-gapH+1
		},400,"easeInOutCubic");
		if($(window).width()<=640){
			$btnGnb.trigger("click");
		}
		evt.preventDefault();
	});
	// 4단계 - 로고 클릭시 최상단으로 이동
	$(".logo").on("click",function(evt){
		$("html,body").stop().animate({
			scrollTop : 0
		},400,"easeInOutCubic");
		evt.preventDefault();
	});

	// PC + MOBILE 버전의 article 제목과 본문 출력
	var $msgH3=$("#mainsrv>article.line_msg>div>.explain>h3");
	var $telH3=$("#mainsrv>article.line_tel>div>.explain>h3");
	var $stickerH3=$("#mainsrv>article.line_sticker>div>.explain>h3");
	var $shareH3=$("#mainsrv>article.line_share>div>.explain>h3");
	var $couponH3=$("#mainsrv>article.line_coupon>div>.explain>h3");
	// PC 버전의 메인 서비스 제목
	var msgH3_PC=$msgH3.html();
	var telH3_PC=$telH3.html();
	var stickerH3_PC=$stickerH3.html();
	var shareH3_PC=$shareH3.html();
	var couponH3_PC=$couponH3.html();
	// PC 버전의 메인 서비스 내용
	var msgText_PC=$msgH3.next().html();
	var telText_PC=$telH3.next().html();
	var stickerText_PC=$stickerH3.next().html();
	var shareText_PC=$shareH3.next().html();
	var couponText_PC=$couponH3.next().html();
	// MOBILE 버전의 메인 서비스 내용
	var msgH3_MO="무료메시지";
	var telH3_MO="무료영상/음성통화";
	var stickerH3_MO="스티커로 더 즐거운 대화";
	var shareH3_MO="무엇이든 공유";
	var couponH3_MO="인기브랜드 쿠폰";
	// MOBILE 버전의 메인 서비스 내용
	var msgText_MO="1:1 대화는 물론 그룹 대화까지<br /> 무제한 무료로 즐겨보세요.";
	var telText_MO="듣고싶은 목소리, 보고싶은 얼굴이 있다면 <br /> 망설이지 마세요";
	var stickerText_MO="10,000개가 넘는 스티커와 이모티콘으로 <br /> 미묘한 감정까지 표현해보세요. ";
	var shareText_MO="사진, 동영상은 물론 음성메시지와 연락처, <br /> 위치 정보까지 손쉽게 보낼 수 있습니다.";
	var couponText_MO="인기 아티스트, 브랜드의 최신 소식과 <br /> 쿠폰이 기다리고 있습니다.";
	// 5단계 - 브라우저의 가로폭에 따른 설정 (pc모드)
	$(window).on("load resize",function(){
		if($(this).width()>640){ // PC모드
			gapH=70;
			$nav.show();
			// 제목
			$msgH3.html(msgH3_PC);
			$telH3.html(telH3_PC);
			$stickerH3.html(stickerH3_PC);
			$shareH3.html(shareH3_PC);
			$couponH3.html(couponH3_PC);
			// 내용
			$msgH3.next().html(msgText_PC);
			$telH3.next().html(telText_PC);
			$stickerH3.next().html(stickerText_PC);
			$shareH3.next().html(shareText_PC);
			$couponH3.next().html(couponText_PC);
		}else{ //모바일모드
			gapH=50;
			$btnGnb.removeClass("close").next.hide();
			// 제목
			$msgH3.html(msgH3_MO);
			$telH3.html(telH3_MO);
			$stickerH3.html(stickerH3_MO);
			$shareH3.html(shareH3_MO);
			$couponH3.html(couponH3_MO);
			// 내용
			$msgH3.next().html(msgText_MO);
			$telH3.next().html(telText_MO);
			$stickerH3.next().html(sticker_MO);
			$shareH3.next().html(shareText_MO);
			$couponH3.next().html(couponText_MO);
		}
		setPosArticle();
	});
	// 640px 이하에서만 나타나는 header 영역의 메뉴 버튼
	var $btnGnb=$("header>.container>.btn-gnb");
	var $nav=$("header>.container>nav");
	$btnGnb.on("click",function(){
		$(this).toggleClass("close");
		$nav.toggle();
	}); // 모바일 메뉴 클릭 이벤트
});