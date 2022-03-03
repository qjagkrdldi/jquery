$(function(){
    
    var executed = false;
    
    $(window).scroll(function(){
        $('.numb').text($(this).scrollTop());
        var threshold = $('.section2').offset().top - 700;
        
        if(!executed){
            if($(window).scrollTop() >= threshold){
            var progressRate = $('.animate').attr('data-rate');
            
            $({percent:0}).animate({percent:progressRate},{
                duration:1500,
                progress:function(){
                    var now = this.percent;
                    $('.animate').text(Math.ceil(now) + '%');
                }
            });
                
                executed = true;
            
           }
        }
        
        
        
    });
})