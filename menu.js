// jQuery(function($){
    
//     var doAnimation = function(){
//         var offset = $(window).scrollTop() + $(window).height();
//         var $animatables = $('.beforeAnime');

//     if($animatables.length == 0){/*cssでvisibility: hidden;にしているから、カウントがゼロ*/
//         $(window).of('scroll',doAnimation);
//     }

//     $animatables.each(function(){
//         var $animatable = $(this);
//         if(($animatable.offset().top + $animatable.height() - 20)> offset){
//             $animatable.removeClass('beforeAnime').addClass('animating');
//         }
//     });
//     };
//     $(window).on('scroll',doAnimation);
//     $(window).trigger('scroll');
// });

// jQuery(function(){
//     var sHeight = $('div.shadow'),
//         pbox    = $('div.process-box')
//         actHeight = sHeight.offset().top/2;
//         documentEl = $(document);

//     documentEl.on('scroll',function(){
//         if (documentEl.scrollTop() > actHeight && pbox.hasClass('beforeAnime')){
//             $('.shadow beforeAnime').removeClass('beforeAnime').addClass('animating')
//         };         
//     });
// });

jQuery(function(){
    var scrollAnimation = document.querySelectorAll('.beforeAnime');
    var scrollAnimationFunc = function() {
      for(var i = 0; i < scrollAnimation.length; i++) {
        var triggerMargin = 300;
        if (window.innerHeight > scrollAnimation[i].getBoundingClientRect().top + triggerMargin) {
          scrollAnimation[i].classList.add('animating');
        }
      }
    }
    window.addEventListener('load', scrollAnimationFunc);
    window.addEventListener('scroll', scrollAnimationFunc);
})

var scrollAnimationElm = document.querySelectorAll('.img');
var scrollAnimationFunc = function() {
  for(var i = 0; i < scrollAnimationElm.length; i++) {
    var triggerMargin = 300;
    var elm = scrollAnimationElm[i];
    var showPos = 0;
    if(elm.dataset.row_trigger) {
      showPos = document.querySelector(elm.dataset.row_trigger).getBoundingClientRect().top + triggerMargin;/*getBoundingClientRect()はdata関数で指定したところを基準にする*/
    } else {
      showPos = elm.getBoundingClientRect().top + triggerMargin;
    }
    if (window.innerHeight > showPos) {
      elm.classList.add('show');
    }
  }
}
window.addEventListener('load', scrollAnimationFunc);
window.addEventListener('scroll', scrollAnimationFunc);


// jQuery(function(){
//     alert('hello')
// })
