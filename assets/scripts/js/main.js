$(document).ready(function () {
	$('.flexslider').flexslider({
		animation: "slide",
		slideshow: false,
		directionNav: true,
		controlNav: false,
		touch: true
	});
//	$("#scroll-skills").click(function (){
//        $('html, body').animate({
//            scrollTop: $("#skills").offset().top - 30
//        }, 800);
//        return false;
//    });
//    $("#scroll-projects").click(function (){
//        $('html, body').animate({
//            scrollTop: $("#projects").offset().top - 30
//        }, 800);
//        return false;
//    });
//    $("#scroll-contact").click(function (){
//        $('html, body').animate({
//            scrollTop: $("#contact").offset().top - 30
//        }, 800);
//        return false;
//    });
    function scrollTo(button, target) {
    	$(button).click(function (){
	        $('html, body').animate({
	            scrollTop: $(target).offset().top - 30
	        }, 800);
	        return false;
   		});
    }
    scrollTo('#scroll-skills', '#skills');
    scrollTo('#scroll-projects', '#projects');
    scrollTo('#scroll-experience', '#experience')
    scrollTo('#scroll-contact', '#contact');
});