/*ACORDION////////////////////////////////////////////*/
$(document).ready(function() {
    $('.accordion-item-trigger').click(function(){
        /*$(this).next('.accordion-item-content').slideToggle(200);*/
        $(this).parent('.accordion-item').toggleClass('accordion-item--active');
    });
});


/*/BUTTON-TO-TOP//////////////////////////////////////////////////*/
function backToTop() {
    let button = $ ('.button-to-top');

    $(window).on('scroll', () => {
        if ($(this).scrollTop() >= 100) {
            button.fadeIn();
        } else {
            button.fadeOut();
        }
    });

    button.on('click', (e) => {
        e.preventDefault();
        $('html').animate({scrollTop: 0}, 1000);
    })
}

backToTop();


/*/MOBILE-NAVIGATION////////////////////////////////////////////*/
const menuToggle = document.querySelector('#menu_togle');
const mobileNavContainer = document.querySelector('#mobile-nav');


menuToggle.onclick = function(){
    menuToggle.classList.toggle('menu-icon-active');
    mobileNavContainer.classList.toggle('mobile-nav--active'); 
}

/*//ПЛАВНЫЙ ПЕРЕХОД ПО ССЫЛКАМ///////////////////////////////////////////////////////////////*/
    function slowScroll(id) { 
        var offset = 0;
        $('html, body').animate({ 
             scrollTop: $(id).offset().top - offset 
        }, 1000);
        return false; 
    } 
