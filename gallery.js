function slideleft(){
    document.getElementById('male_slide').style.visibility='visible';
    document.getElementById('male_slide').style.width='100%';
    document.getElementById('male_slide').style.left='0';
    document.getElementById('male-text').style.opacity='0';
    document.getElementById('male').style.width='100%';
    document.getElementById('female').style.width='0%';
    document.getElementById('closeBtn').style.opacity='1';
    document.getElementById('maleGallery').style.opacity='1';
}
function slideright(){
    document.getElementById('female_slide').style.visibility='visible';
    // document.getElementById('female_slide').style.left='0';
    document.getElementById('female-text').style.opacity='0';
    document.getElementById('female_slide').style.width='100%';
    document.getElementById('male').style.width='0';
    document.getElementById('female').style.width='100%'
    document.getElementById('closeBtn2').style.opacity='1';
    document.getElementById('femaleGallery').style.opacity='1';
}

function cSlide(){
    document.getElementById('male_slide').style.visibility='hidden';
    document.getElementById('male_slide').style.width='0%';
    document.getElementById('male_slide').style.left='0%';
    document.getElementById('male-text').style.opacity='1';
    document.getElementById('male').style.width='50%';
    document.getElementById('female').style.width='50%';
    document.getElementById('closeBtn').style.opacity='0';
    document.getElementById('maleGallery').style.opacity='0';
}
function cSlide2(){
    document.getElementById('female_slide').style.visibility='hidden';
    document.getElementById('female_slide').style.width='0%';
    document.getElementById('female_slide').style.right='0%';
    document.getElementById('female-text').style.opacity='1';
    document.getElementById('female').style.width='50%';
    document.getElementById('male').style.width='50%';
    document.getElementById('closeBtn2').style.opacity='0';
    document.getElementById('femaleGallery').style.opacity='0';
}

function mslider(){
    $male_slider = $('.male-img li.active');

    if($male_slider.length == 0){
        $('.male-img li:first-child').addClass('active');
    }else{
        $next = $male_slider.removeClass('active').next();
        if($next.length == 0){
            $('.male-img li:first-child').addClass('active');
        }else{
            $next.addClass('active');
        };
    };
    
};
setInterval(mslider,3000);

function fslider(){
    $female_slider = $('.female-img li.active');

    if($female_slider.length == 0){
        $('.female-img li:first-child').addClass('active');
    }else{
        $next = $female_slider.removeClass('active').next();
        if($next.length == 0){
            $('.female-img li:first-child').addClass('active');
        }else{
            $next.addClass('active');
        };
    };
    
};
setInterval(fslider,3000);
// onclickした時に.activeを追加する
