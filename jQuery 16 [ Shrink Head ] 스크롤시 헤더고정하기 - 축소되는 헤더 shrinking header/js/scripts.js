/*
* ---------------------------------------------------------------------------
* jQuery Version
* ---------------------------------------------------------------------------
*/

var $window = $(window),
    $mainHeader = $('#main-header'),
    $defaultLogo = 'images/logo.svg',
    $smallLogo = 'images/logo-shrink.svg';

    $window.scroll(function(){
        if($(this).scrollTop() > 100){
            if(!$mainHeader.hasClass('shrink')){
                $mainHeader.addClass('shrink');
                switchImages($smallLogo);
            }
        }else{
            if($mainHeader.hasClass('shrink')){
                $mainHeader.removeClass('shrink');
                switchImages($defaultLogo);
            }
        }
    })

    function switchImages(newPath){
        var $Logo = $('#logo');
        $Logo.fadeOut(300,function(){
            $Logo.attr('src',newPath);
            $Logo.fadeIn(300);

        });
    }

/*
* ---------------------------------------------------------------------------
* Vanilla JavaScript Version
* ---------------------------------------------------------------------------
*/
