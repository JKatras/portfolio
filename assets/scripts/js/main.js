//$(document).ready(function() {
//	$('.jcarousel').jcarousel();
//	    
//    $('.jcarousel-control-prev')
//            .on('jcarouselcontrol:active', function() {
//                $(this).removeClass('inactive');
//            })
//            .on('jcarouselcontrol:inactive', function() {
//                $(this).addClass('inactive');
//            })
//            .jcarouselControl({
//                target: '-=1'
//            });
//
//    $('.jcarousel-control-next')
//        .on('jcarouselcontrol:active', function() {
//            $(this).removeClass('inactive');
//        })
//        .on('jcarouselcontrol:inactive', function() {
//            $(this).addClass('inactive');
//        })
//        .jcarouselControl({
//            target: '+=1'
//        });
//});

$(document).ready(function() {
	$('.bxslider').bxSlider({
		minSlides: 2,
		maxSlides: 2,
		slideWidth: 800,
		slideMargin: 10,
//		adaptiveHeight: true,
		mode: 'fade'
	});
});