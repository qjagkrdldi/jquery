$(function () {
    
    $(window).scroll(function(){
        if($(this).scrollTop()>300){
            $('.go_top').fadeIn(300);
           }else{
               $('.go_top').fadeOut(300);
           }
    })
    
    $('.go_top').click(function(e){
        e.preventDefault();
        $('body,html').animate({scrollTop:'0'},300);
    })
	
});
