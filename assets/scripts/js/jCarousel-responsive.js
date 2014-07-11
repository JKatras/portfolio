$(document).ready (function() {
    
        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var width = jcarousel.innerWidth();

                if (width >= 1600) {
                    width = width / 2;
                }
                else if (width <= 800) {
                	width = width;
                } 
//                else if (width >= 350) {
//                    width = width / 2;
//                }

                jcarousel.jcarousel('items').css('width', width + 'px');
            })
            .jcarousel({
                wrap: 'circular'
            });

        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });

//        $('.jcarousel-pagination')
//            .on('jcarouselpagination:active', 'a', function() {
//                $(this).addClass('active');
//            })
//            .on('jcarouselpagination:inactive', 'a', function() {
//                $(this).removeClass('active');
//            })
//            .on('click', function(e) {
//                e.preventDefault();
//            })
//            .jcarouselPagination({
//                perPage: 1,
//                item: function(page) {
//                    return '<a href="#' + page + '">' + page + '</a>';
//                }
//            })
//            ;

});