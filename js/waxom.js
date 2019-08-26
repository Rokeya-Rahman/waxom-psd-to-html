

$(window).scroll(function () {
    var defaultScrollPosition = $(window).scrollTop();
    if(defaultScrollPosition > 650) {
        $('#myNavbar').css({
            'background-color': 'rgba(85, 85, 85, .8)',
            'z-index' : '99999'
        });
    } else {
        $('#myNavbar').css ({
            'background-color': 'transparent',
            'margin-top': "0"
        })
    }
});





$(document).ready(function() {
    $('.container').carousel({
        num: 3,
        maxWidth: 450,
        maxHeight: 300,
        distance: 100,
        scale: 0.7,
        animationTime: 1000,
        showTime: 4000
    });
});





// $('.portfolio-menu .text-center a').each(function () {
//     $(this).click(function () {
//         alert('test')
//         event.preventDefault();
//         $('.portfolio-menu .text-center a').removeClass('active');
//         $(this).addClass('active');
//
//         var selector = $(this).attr('data-filter');
//         $('.portfolio-item').isotope({
//             filter: selector
//         });
//     });
// });

$('.portfolio-item').isotope({
    itemSelector : '.item',
    layoutMode : 'fitRows'
});

$('.portfolio-menu .text-center a').click(function () {
    event.preventDefault();
    $('.portfolio-menu .text-center a').removeClass('active');
    $(this).addClass('active');

    var selector = $(this).attr('data-filter');
    $('.portfolio-item').isotope({
        filter: selector
    });
});



// jQuery CountUp - CodePen (https://codepen.io/hi-im-si/pen/uhxFn)

$('.counter').each(function() {
    var $this = $(this),
        countTo = $this.attr('data-count');

    $({ countNum: $this.text()}).animate({
            countNum: countTo
        },
        {
            duration: 8000,
            easing:'linear',
            step: function() {
                $this.text(Math.floor(this.countNum));
            },
            complete: function() {
                $this.text(this.countNum);
                //alert('finished');
            }
        });
});




$(function() {
    $('#third').carouseller({
        scrollSpeed: 800,
        autoScrollDelay: 1600,
        easing: 'linear'
    });
});

