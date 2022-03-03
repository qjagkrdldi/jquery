$(function () {
    var $window = $(window),
        $header = $('.page-header'),
        $headerClone = $header.contents().clone(),
        $headerCloneContainer = $('<div class="page-header-clone"></div>'),
        $threshold = $header.offset().top + $header.outerHeight();

        //A.append(B)
        $headerCloneContainer.append($headerClone);

        //A.appendTo(B)
        $headerCloneContainer.appendTo('body');

        $window.scroll(function(){
            if($(this).scrollTop() >= $threshold){
                $headerCloneContainer.addClass('visible');
            }else{
                $headerCloneContainer.removeClass('visible');
            }
        })


});
