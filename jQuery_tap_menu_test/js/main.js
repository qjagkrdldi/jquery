$(function(){
    var tabNav = $('.tabs-nav > li');
    var tabPenl = $('.tab-panel');
    var txani = $('.tx_ani');
    var threshord = txani.offset().top + txani.outerHeight();
    var $counterExecuted = false;
    
    tabNav.click(function(e){
        e.preventDefault();
        
        tabNav.removeClass('active');
        $(this).addClass('active');
        
        tabPenl.hide();
        
        var targetIdx = $(this).index();
        console.log(targetIdx);
        tabPenl.eq(targetIdx).show();
    })
    
    tabNav.eq(0).trigger('click');
    
    $(window).scroll(function(){
        if($(this).scrollTop() > 0){
       txani.addClass('active');
       }
        
        //number animation
        var numberthreshord = $('.number').offset().top -700;
        var $number = $('.number > ul > li');
        
        
        if(!$counterExecuted){
            if($(this).scrollTop() > numberthreshord){
           $number.each(function(){
               var $current = $(this);
                var $target = $current.attr('data-rate');
               $({hour:0}).animate({hour:$target},{
                   duration:2500,
                   progress:function(){
                       var now = this.hour;
                       $current.text(Math.ceil(now));
                       $counterExecuted = true;
                   }
               })
           })
           }
            
           }
        
       
    })
    
    
    
})


