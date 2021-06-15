;(function(){

			// Menu settings
			$('#menuToggle, .menu-close, .fecharMenu').on('click', function(){
				$('#menuToggle').toggleClass('active');
				$('body').toggleClass('body-push-toleft');
				$('#theMenu').toggleClass('menu-open');
			});

})(jQuery)