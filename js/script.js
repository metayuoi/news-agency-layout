$(".navigation").on("click", function(e) {
	$(this).toggleClass("opened");
	$(".main").toggle();
	$("aside").toggle();
	$(".footer").toggle();
	$(".featured-news").toggle();
	if ($(".upper-item").is(':hidden')) {
		$(".bottom-headline").toggle();
	};
	$(".upper-nav").slideToggle();
	$(".black-bar").slideToggle(200);
})