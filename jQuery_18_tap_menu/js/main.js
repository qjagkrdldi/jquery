$(function () {
    var tabAnchor = $('.tabs-nav li'),
        tabPanel = $('.tabs-panel');
    
    tabAnchor.click(function(e){
        e.preventDefault();

        $(this).find('a').addClass('active');
        $(this).siblings().find('a').removeClass('active');
        
        tabPanel.hide();
        
        var targetIdx = $(this).index();
        
        tabPanel.eq(targetIdx).show();
        
        
        
    })
    tabAnchor.eq(0).trigger('click');

});

