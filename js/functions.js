jQuery(document).ready(function($) {
	$('.msnim-opener-wrap').click(function () {
	    $('.msni-more').slideToggle('slow');
	    $('.msnim-opener').toggleClass('active');
	    if ($('.msnim-opener').hasClass('active')) {
	        $('.msnim-opener').html('less categories');
	    } else {
	        $('.msnim-opener').html('more categoires');
	    }
	});


	 // The scrolling to top
	$(window).scroll(function () {
	    if ($(this).scrollTop() > 200) {
	        $('.scroll-to-top').fadeIn();
	    } else {
	        $('.scroll-to-top').fadeOut();
	    }
	});
	$('.scroll-to-top').click(function () {
	    $('body,html').animate({
	        scrollTop: 0
	    }, 800);
	    return false;
	});



// don't delete, the ready END

});