$(function(){
    $('#typo .inner').click(function(){
        //선택자.animate({속성:값, 속성:값},시간,이징,다른할일);
        //linear, swing
        //function(){실제할일}
        $(this).animate({opaciy:0, fontSize:'0px'},1500, 'easeInOutElastic',
        function(){
            $(this).animate({opaciy:1,fontSize:'110px'},1500);
        });
    });
});
