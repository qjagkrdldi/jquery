$(function(){
    var $duration = 300,
        $button = $('#buttons2 button');

    // var $buttons = document.getElementsByTagName('button');

    //$buttons[0].style.top = '-40';
    //$buttons[1].style.top = '0';

    //버튼들의 높이 -40, 0, 40, 80, 120.....
    //자바스크립트 요소들마다할일
    // i 0 = -40, i 1 =0, i 2 = 40

    /*
    for(var i = 0; i<=$buttons.length; i++){
        $buttons[i].style.top = i*40 -40 + 'px';
    }
    */
    $button.each(function(idx){
        $(this).css({top:idx*40-40+'px'})
    })

    .mouseover(function(){
        $(this).stop().animate({backgroundColor:'yellow',color:'#000'},$duration);
        $(this).find('img:first-child').stop().animate({opacity:0});
        $(this).find('img:nth-child(2)').stop().animate({opacity:1});
    })
    .mouseout(function(){
        $(this).stop().animate({backgroundColor:'#fff',color:'#01b169'},$duration);
        $(this).find('img:first-child').stop().animate({opacity:1});
        $(this).find('img:nth-child(2)').stop().animate({opacity:0});
    });


})
