$(function () {
    let container = $('.work-section'),
        navItems = $('.tabs-nav li'),
        highLight = $('.tabs-highlight');

//    container.tabs({
//        show: {duration: 120},
//        hide: {duration: 120 },
//        create: moveHightLight,
//        activate: moveHightLight 
//        
//         });
//
//        function moveHightLight(event, ui) {
//        let newNavItem = ui.newTab || ui.tab;
//        let newLeftValue = newNavItem.position().left;
//        highLight.animate({left:newLeftValue},300);
//        }

    
    container.tabs({
       show: {duration: 120},
       hide: {duration: 120 },      
    });
    
    //navItems을 클릭하면 클릭한 그 요소의 left값을 변수 newLeftValue에 담고, highLight가 움직이도록 합니다.
    
    navItems.click(function(){
        let newLeftValue = $(this).position().left;
        
        highLight.animate({left:newLeftValue});
    })
        navItems.eq(0).trigger("click");
        

   
});
