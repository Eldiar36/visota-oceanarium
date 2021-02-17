
$('.interesting-slider').slick({
    infinite: false,
    dots: false,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
        {
            breakpoint: 767,
            settings:{
                slidesToShow: 1.2,
            }
        },
    ]
});
$('.sea_creatures-slider').slick({
    infinite: false,
    dots: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [

        {
            breakpoint: 1025,
            settings: {
                slidesToShow: 2.2,
            }
        },
        {
            breakpoint: 767,
            settings:{
                slidesToShow: 1.1,
                slidesToScroll: 1,
            }
        },
    ]
});