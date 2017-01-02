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
    zoom: 16,
    center: new google.maps.LatLng(25.789, -80.140),
    mapTypeId: 'roadmap'
});

// ICONS_____________
var glowImage = {
    url: 'assets/glow_favicon.png', // image is 512 x 512
    scaledSize : new google.maps.Size(52, 52),
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
      position: new google.maps.LatLng(25.789, -80.140),
      type: 'glowYoga'
      }
  ];

  for (var i = 0, feature; feature = features[i]; i++) {
    addMarker(feature);
  }

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

// var map;
//   function initMap() {

//   	var glow_yoga = {lat: 25.789, lng: -80.140};

//   	var marker = new google.maps.Marker({
//   		position: glow_yoga,
//   		map: map
//   	})
//     map = new google.maps.Map(document.getElementById('map'), {
//       zoom: 16,
//       center: glow_yoga,
//       mapTypeId: 'roadmap'
//     });

//     var iconBase = 'https://maps.google.com/mapfiles/kml/shapes/';
//     var icons = {
//       parking: {
//         name: 'Parking',
//         icon: iconBase + 'parking_lot_maps.png'
//       }
//     };

//     function addMarker(feature) {
//       var marker = new google.maps.Marker({
//         position: feature.position,
//         icon: icons[feature.type].icon,
//         map: map
//       });
//     }

//     var features = [
//       {
//         position: new google.maps.LatLng(25.7897423, -80.1400118),
//         type: 'parking'
//       }, {
//         position: new google.maps.LatLng(25.7869427, -80.138672),
//         type: 'parking'
//       }, {
//         position: new google.maps.LatLng(25.7869427, -80.138672),
//         type: 'parking'
//       }
//     ];

//     for (var i = 0, feature; feature = features[i]; i++) {
//       addMarker(feature);
//     }

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
  // }


// TRY 2 GOOGLE MAP THINGS _________________________

// /*
//  * declare map as a global variable
//  */
// var map;

// /*
//  * use google maps api built-in mechanism to attach dom events
//  */
// google.maps.event.addDomListener(window, "load", function () {

//   /*
//    * create map
//    */
//   var map = new google.maps.Map(document.getElementById("map"), {
//     center: new google.maps.LatLng(25.789, -80.140),
//     zoom: 16,
//     mapTypeId: google.maps.MapTypeId.ROADMAP
//   });

//   /*
//    * create infowindow (which will be used by markers)
//    */
//   var infoWindow = new google.maps.InfoWindow();

//   /*
//    * marker creater function (acts as a closure for html parameter)
//    */
//   function createMarker(options, html) {
//     var marker = new google.maps.Marker(options);
//     if (html) {
//       google.maps.event.addListener(marker, "click", function () {
//         infoWindow.setContent(html);
//         infoWindow.open(options.map, this);
//       });
//     }
//     return marker;
//   }

//   /*
//    * add markers to map
//    */
    
//     var image = {
//         url: 'assets/glow_favicon.png', // image is 512 x 512
//         scaledSize : new google.maps.Size(42, 32),
//     };
    
//   var marker0 = createMarker({
//     position: new google.maps.LatLng(25.789, -80.140),
//     map: map,
//     icon: image
//   }, "<h1>Marker 0</h1><p>This is the home marker.</p>");

// });
