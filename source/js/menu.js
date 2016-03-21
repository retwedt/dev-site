// menu.js

// close menu when a new link is clicked
var winWidth = $( window ).width();
// mobile menu
$('.nav-close').find('a').on('click', function(e){
	winWidth = $( window ).width();
	if( winWidth < 768) {
		$('.navbar-collapse').collapse('toggle');
	}
});
// dropdown menu
$('.navbar-collapse').find('.dropdown-menu').find('a').on('click', function(e){
	winWidth = $( window ).width();
	if( winWidth < 768) {
		$('.navbar-collapse').collapse('toggle');
	}
});

// add a slide effect to the mobile dropdown menu
// $('.navbar-collapse').find('.dropdown').on('show.bs.dropdown', function(e){
// 	winWidth = $( window ).width();
// 	if( winWidth < 768) {
// 	  $('.navbar-collapse').find('.dropdown-menu').slideDown();
// 	}
// });
// $('.navbar-collapse').find('.dropdown').on('hide.bs.dropdown', function(e){
// 	winWidth = $( window ).width();
// 	if( winWidth < 768) {
// 	  $('.navbar-collapse').find('.dropdown-menu').slideUp();
// 	}
// });