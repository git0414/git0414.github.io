function slider(){
    $slider_img = $('.shop-img img.active');
    $sliderDot =$('.dots');

    if($slider_img.length == 0){
        $('.shop-img img:first-child').addClass('active');
        $('.dots div:first-child');

    }else{

        $next = $slider_img.removeClass('active').next();/*nextをつけることで処理さす*/
        $next_light = $sliderDot;

        if($next.length == 0){
            $('.shop-img img:first-child').addClass('active');
        }else{
            $next.addClass('active');
        };
    };
};
function dot(){
    $selectDot = $('.dots div.dot');
    if($selectDot.length == 0){
        $('.dots div:first-child').addClass('dot');
    }else{
        $nextDot = $selectDot.removeClass('dot').next();
        if($nextDot.length == 0){
            $('.dots div:first-child').addClass('dot');
        }else{
            $nextDot.addClass('dot')
        }
    }
    
}
setInterval(dot,4000);
setInterval(slider,4000);

    $('.yourName').on('mouseenter',function(){
        $(this).trigger('focus');
    });
    $('.number').on('mouseenter',function(){
        $(this).trigger('focus');
    });

    function moveNext1(){
        $clickDot = $('.dots div:nth-child(1)');
        $('.shop-img img:nth-child(1)').addClass('active');
        $('.shop-img img:nth-child(2)').removeClass('active');
        $('.shop-img img:nth-child(3)').removeClass('active');
        $('.dots div:nth-child(1)').addClass('dot');
        $('.dots div:nth-child(2)').removeClass('dot');
        $('.dots div:nth-child(3)').removeClass('dot');        
    }
    function moveNext2(){
        $clickDot = $('.dots div:nth-child(2)');
        $('.shop-img img:nth-child(1)').removeClass('active');
        $('.shop-img img:nth-child(2)').addClass('active');
        $('.shop-img img:nth-child(3)').removeClass('active');
        $('.dots div:nth-child(1)').removeClass('dot');
        $('.dots div:nth-child(2)').addClass('dot');
        $('.dots div:nth-child(3)').removeClass('dot');   
    }
    function moveNext3(){
        $clickDot = $('.dots div:nth-child(3)');
        $('.shop-img img:nth-child(1)').removeClass('active');
        $('.shop-img img:nth-child(2)').removeClass('active');
        $('.shop-img img:nth-child(3)').addClass('active');
        $('.dots div:nth-child(1)').removeClass('dot');
        $('.dots div:nth-child(2)').removeClass('dot');
        $('.dots div:nth-child(3)').addClass('dot');   
    }    
