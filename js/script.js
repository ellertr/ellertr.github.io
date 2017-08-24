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
      name = document.getElementById('inputName');
      email = document.getElementById('inputEmail');
      message = document.getElementById('inputMessage');
      if (!name.value || !email.value || !message.value) {
        alertify.error('Please check your entries');
        return false;
      } else {
        $.ajax({
          method: 'POST',
          url: '//formspree.io/ellert@ellertrunars.com',
          data: $('#contact-form').serialize(),
          datatype: 'json'
        });
        e.preventDefault();
        $(this).get(0).reset();
        return alertify.success('Message sent');
      }
    });
  });

}).call(this);
