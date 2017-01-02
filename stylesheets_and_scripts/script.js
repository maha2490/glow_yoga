// JQUERY THINGS _________________________
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


// ORIG GOOGLE MAP THINGS _________________________
var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 17,
    center: new google.maps.LatLng(25.789, -80.140),
    mapTypeId: 'roadmap'
  });

  // ICONS_____________
  var glowImage = {
      url: 'assets/glow_marker6.png', // image is 512 x 512
      scaledSize : new google.maps.Size(62, 62),
  };
  var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
  var icons = {
    parking: {
      name: 'Parking',
      icon: iconBase + 'parking_lot_maps.png'
    },
    glowYoga: {
      name: 'Glow Yoga',
      icon: glowImage
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
    { position: new google.maps.LatLng(25.7897423, -80.1400118),
        type: 'parking'
    }, {
      position: new google.maps.LatLng(25.7869427, -80.138672),
      type: 'parking'
    }, {
      // changing the marker positioning:
      // move at the thousandths, increase lat moves up on x axis
      // and                      increase lng moves left on y axis                            
      position: new google.maps.LatLng(25.7887976, -80.1403493), 
      type: 'glowYoga'
      }
  ];

  for (var i = 0, feature; feature = features[i]; i++) {
    addMarker(feature);
  }
  // legend, if you want to reactivate. will need glow marker img (couldn't figure out initially)
  // var legend = document.getElementById('legend');
  // for (var key in icons) {
  //   var type = icons[key];
  //   var name = type.name;
  //   var icon = type.icon;
  //   var div = document.createElement('div');
  //   div.innerHTML = '<img src="' + icon + '"> ' + name;
  //   legend.appendChild(div);
  // }

  // map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
}

