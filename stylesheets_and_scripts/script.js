$(document).ready(function(){

	// $("main #members p").hide();

	// 	$("main #members h3").click(function(){
	// 		$(this).next().slideToggle();  //  .next, .siblings
			
	// 	});
	$("main #faq_left p").hide();

	$("main #faq_left h3").click(function(){
			$(this).next().slideToggle(); 
			
		});
	$(".dropdown").click(function(){
		$(this).toggleClass("js_nav_active_box");
	});

});

var map;
  function initMap() {

  	var uluru = {lat: 25.789, lng: -80.140};
	// var map = new google.maps.Map(document.getElementById('map'), {
	// 	zoom: 16,
	// 	center: uluru
	// });

	var marker = new google.maps.Marker({
		position: uluru,
		map: map
	})
    map = new google.maps.Map(document.getElementById('map'), {
      zoom: 16,
      center: uluru,
      mapTypeId: 'roadmap'
    });

    var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
    var icons = {
      parking: {
        name: 'Parking',
        icon: iconBase + 'parking_lot_maps.png'
      }
    };

    function addMarker(feature) {
      var marker = new google.maps.Marker({
        position: feature.position,
        icon: icons[feature.type].icon,
        map: map
      });
    }

    var features = [
      {
        position: new google.maps.LatLng(25.7897423, -80.1400118),
        type: 'parking'
      }, {
        position: new google.maps.LatLng(25.7869427, -80.138672),
        type: 'parking'
      }
    ];

    for (var i = 0, feature; feature = features[i]; i++) {
      addMarker(feature);
    }

    var legend = document.getElementById('legend');
    for (var key in icons) {
      var type = icons[key];
      var name = type.name;
      var icon = type.icon;
      var div = document.createElement('div');
      div.innerHTML = '<img src="' + icon + '"> ' + name;
      legend.appendChild(div);
    }

    map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
  }


