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

// Form
(function() {
  $(document).ready(function() {
    return $('#contact-form').submit(function(e) {
      var email, message, name;
      name = document.getElementById('name');
      email = document.getElementById('exampleEmailInput');
      message = document.getElementById('exampleMessage');
      if (!name.value || !email.value || !message.value) {
        alertify.error('Please check your entries');
        return false;
      } 
    });
  });

})();
