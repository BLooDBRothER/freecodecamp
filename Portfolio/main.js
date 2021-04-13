//owl carousel
$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplatTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-nav .owl-nav-prev'), $('.owl-nav .owl-nav-next')],
        responsiveClass:true,
        responsive:{
            0:{
                items:1
            },
            1000:{
                items:3
            }
        }
    });
});


function toggleopen(){
    let ham = document.getElementById("ham");
    let nav = document.getElementById("navbar");
    if(nav.className === 'nav'){
        nav.className = 'nav nav-exp';
        ham.style.transform = 'rotate(180deg)'
    }
    else{
        nav.className = 'nav';
        ham.style.transform = 'rotate(0deg)'
    }
}
