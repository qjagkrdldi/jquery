// document.getElementsByTagName('h1')[0].style.color = 'red';

  /*
  document.addEventListener('DOMContentLoaded',function(){
      document.getElementsByTagName('h1')[0].style.color = 'red';
  })
  */

  /*
  $(document).ready(function(){
      $('h1').css({'color':'red'});
  })
  */
  $(function(){
      $('h1').css({'color':'red'});
      /*
      $('#typo  .inner').css({
          'text-decoration':'underline',
          'border-bottom':'5px solid red',
          'transform':'rotate(45deg)',
          'opacity':0.5
      });
      */
      /*
      $('#typo  .inner').css({
          textDecoration:'underline',
          borderBottom:'5px solid red',
          transform:'rotate(45deg)',
          opacity:0.5
      });
      */

      //실행 지점 제어 - event종류 - mouseover 마우스가 올라왔을 때.
      //on메서드, bind('click'...--> .on .off)
      //$('선택자').on('이벤트 종류' , 할일);
      //할일 = 임의 함수 = function(){}

      // $('#typo').on('mouseover',function(){
      //     $('#typo').css('background','green');
      // })
      //
      // $('#typo').on('mouseout',function(){
      //     $('#typo').css('background','#3498db');
      // })


      // $('#typo').on('mouseover',function(){
      //     $('#typo').css('background','green');
      // }).on('mouseout',function(){
      //     $('#typo').css('background','#3498db');
      // })

      $('#typo , h1').mouseover(function(){
          $(this).css('background','green');
      }).mouseout(function(){
          $(this).css('background','#3498db');
      })



  });


//$('h1').css({'color':'red'});
