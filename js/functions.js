jQuery(document).ready(function($) {
	$('.msnim-opener-wrap').click(function() {
		$('.msni-more').slideToggle('slow');
		$('.msnim-opener').toggleClass('active');
		if($('.msnim-opener').hasClass('active')){
			$('.msnim-opener').html('less categories');
		}
		else{
			$('.msnim-opener').html('more categoires');
		}
	});
});