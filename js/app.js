$(document).foundation()

$('[data-toggle-dia]').click(function (ev) {
	const panel = $(this).data('toggleDia')
	$('#lineup-tabs').foundation('selectTab', panel)
})

const $offCanvas = $('#offCanvas')
const $sticky = $('#sticky')

$offCanvas.find('li').click(function (ev) {
	alert('')
	$offCanvas.foundation('close')
	setTimeout(function () {
	$sticky.css('left', '0px')
	}, 300)
})



// more click
$('.card-profile-stats-more-link').click(function(e){
	e.preventDefault();
	if ( $(".card-profile-stats-more-content").is(':hidden') ) {
	  $('.card-profile-stats-more-link').find('i').removeClass('fa-angle-down').addClass('fa-angle-up');
	} else {
	  $('.card-profile-stats-more-link').find('i').removeClass('fa-angle-up').addClass('fa-angle-down');
	}
	$(this).next('.card-profile-stats-more-content').slideToggle();
  });
  
  