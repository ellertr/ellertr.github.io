// Hamburger-menu
(function () {
	$('.hamburger-menu').on('click', function() {
		$('.bar').toggleClass('animate');
        $('.body-area').toggleClass('overlay');
        $('.logo').toggleClass('overlay');
        $('.footer').toggleClass('overlay');
        $('.menu').toggleClass('show')
	})
})();
