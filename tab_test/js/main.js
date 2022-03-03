$(function () {
    var tabAnchor = $('.tabs-nav li'),
        tabPanel = $('.tabs-panel'),
        highLight = $('.highLight');

    tabPanel.hide();
    tabPanel.eq(0).show();
    tabAnchor.eq(0).css({
        color: '#fff'
    });

    tabAnchor.click(function (e) {
        e.preventDefault();

        $(this).find('a').addClass('active');
        $(this).siblings().find('a').removeClass('active');

        tabPanel.hide();
        tabPanel.eq(0).show();

        var targetPos = $(this).position().left;
        var targetIdx = $(this).index();

        tabPanel.eq(targetIdx).show();
        highLight.animate({
            left: targetPos
        });
    })

});
