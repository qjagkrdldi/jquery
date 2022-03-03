$(document).ready(function () {

    $('.posts_list').bxSlider({
        minSlides: 1,
        maxSlides: 3,
        moveSlides: 1,
        slideWidth: 370,
        slideMargin: 30,
        pager: false,
        nextSelector: '.recent_posts .controls .next',
        prevSelector: '.recent_posts .controls .prev'
    });

    //Mobile 메뉴
    $(".toggle").click(function () {
        $(".main-menu").slideToggle();
    });

    //사이즈변경시 메뉴
    $(window).resize(function () {
        if ($(window).width() > 768) {
            //참이면 할일
            $(".main-menu").show();
        } else {
            //거짓이면 할일
            $(".main-menu").hide();
        }
    });
    
    //상단 메뉴 고정
    var header = $('header');
    var services = $('.services');
    var $counters = $('.counters');
    var $counterData = $counters.find('h3');
    
    var $serviceExecuted = false;
    var $counterExecuted = false;
    
    $(window).scroll(function(){
        var $currentSct = $(this).scrollTop();
        var offset = 500;
    
    if($currentSct > 0){
        header.addClass('sticky')
   }else{
       header.removeClass('sticky')
       }
        
    //services 나타내기
    var threshord = services.offset().top - offset;
    
        if(!$serviceExecuted){
               if($currentSct > threshord){
                services.addClass('active');
                   $serviceExecuted = true;
               }
           }
        
        //숫자 애니메이션
         var counterthreshord = $counters.offset().top - offset;
        
        if(!$counterExecuted){
               if($currentSct > counterthreshord){
                   
                   $counterData.each(function(){
                       var $current = $(this);
                       var target = $current.attr('data-rate');
                       
                       $({rate:0}).animate({rate:target},{
                           duration:2500,
                           progress:function(){
                               var now = this.rate;
                               $current.text(Math.ceil(now));
                               $counterExecuted = true;
                           }
                       })
                   })
               }
            
           }
        
    }); // scroll event
    

});















