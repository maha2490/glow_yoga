$(document).ready(function(){



});
	


function initMap() {
	var uluru = {lat: 25.789, lng: -80.140};
	var map = new google.maps.Map(document.getElementById('map'), {
		zoom: 18,
		center: uluru
	});
	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	});
}
