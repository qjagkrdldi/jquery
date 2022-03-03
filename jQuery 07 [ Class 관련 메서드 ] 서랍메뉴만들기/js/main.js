$(function(){
    var $aside = $('aside'),
        $button = $aside.find('button'),
        $duration = 300;

        //버튼을 클릭하면 aside 나오도록 해주세요.
        //선택자.classList.add = 'open';
        //A.addClass('b c'); A.removeClass('b'); A.toggleClass('b');
        //A.hasClass('b') 조건문에서만 사용. a요소에 b라는 클래스있으면 true, 없으면 false

        //속성변경하기, 속성의 값을 반환하기
        //var c = A.attr('src') = a라는 요소의 b라는 속성의 값을 변수명 c에 저장

        $button.click(function(){
            $aside.toggleClass('open');

            if($aside.hasClass('open')){
                $aside.animate({left:'-70px'},$duration,'easeOutElastic');
                $button.find('img').attr("src","img/btn_close.png")
            }else{
                $aside.animate({left:'-350px'},$duration,'easeOutElastic');
                $button.find('img').attr("src","img/btn_open.png")
            }
        })

})
