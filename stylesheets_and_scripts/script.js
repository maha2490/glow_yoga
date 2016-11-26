$(document).ready(function(){

	// $("main #members p").hide();

	// 	$("main #members h3").click(function(){
	// 		$(this).next().slideToggle();  //  .next, .siblings
			
	// 	});
	$("main #faq_right p").hide();

	$("main #faq_right h3").click(function(){
			$(this).next().slideToggle(); 
			
		});
	// $(".dropdown").click(function(){
	// 	$(this).toggleClass("js_nav_active_box");
	// });

});

function initMap() {
	var uluru = {lat: 25.789, lng: -80.140};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 16,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}

