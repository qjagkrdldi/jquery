$(function () {
    var tabAnchor = $('.tabs-nav li a'),
        tabPanel = $('.tabs-panel');
    
    tabAnchor.click(function(e){
        e.preventDefault();
        tabAnchor.removeClass('active');
        $(this).addClass('active');
        
        tabPanel.hide();
        
        var $target =  $(this).attr('href');
        console.log($target);
        
        $($target).show();
    })

});

