$(document).ready(function(){	
	$(".dropdown").click(function(){
		$(this).toggleClass("js_nav_active_box");
	});




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
