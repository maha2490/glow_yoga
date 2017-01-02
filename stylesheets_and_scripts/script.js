$(document).ready(function(){

// **********  FAMILY.HTML  **********  

  // Hide the extra content initially
  $('.read-more-content').addClass('hide')
  $('.read-more-show, .read-more-hide').removeClass('hide')

  // Set up the toggle effect:
  $('.read-more-show').on('click', function(e) {
    $(this).next('.read-more-content').removeClass('hide');
    $(this).addClass('hide');
    e.preventDefault();
  });

  $('.read-more-hide').on('click', function(e) {
    $(this).parent('.read-more-content').addClass('hide');
    var moreid=$(this).attr("more-id");
    $('.read-more-show#'+moreid).removeClass('hide');
    e.preventDefault();
  });

// **********  FAMILY.HTML (mobile)  **********  

  // $(".mobile_family_text").hide();  

  // $(".mobile_family").click(function(){

  //     $(".mobile_family_text").slideToggle();
  // });

  $(".raquel_text").hide();  

  $(".raquel_clickable").click(function(){

      $(".raquel_text").slideToggle();
  });

  $(".john_text").hide();  

  $(".john_clickable").click(function(){

      $(".john_text").slideToggle();
  });

  $(".francesca_text").hide();  

  $(".francesca_clickable").click(function(){

      $(".francesca_text").slideToggle();
  });

  $(".lina_text").hide();  

  $(".lina_clickable").click(function(){

      $(".lina_text").slideToggle();
  });

  $(".caroline_text").hide();  

  $(".caroline_clickable").click(function(){

      $(".caroline_text").slideToggle();
  });

  $(".amy_text").hide();  

  $(".amy_clickable").click(function(){

      $(".amy_text").slideToggle();
  });

  $(".maria_text").hide();  

  $(".maria_clickable").click(function(){

      $(".maria_text").slideToggle();
  });

  $(".willie_text").hide();  

  $(".willie_clickable").click(function(){

      $(".willie_text").slideToggle();
  });

  $(".lulu_text").hide();  

  $(".lulu_clickable").click(function(){

      $(".lulu_text").slideToggle();
  });

  $(".brenda_text").hide();  

  $(".brenda_clickable").click(function(){

      $(".brenda_text").slideToggle();
  });

  $(".julie_text").hide();  

  $(".julie_clickable").click(function(){

      $(".julie_text").slideToggle();
  });

  $(".jeanmarie_text").hide();  

  $(".jeanmarie_clickable").click(function(){

      $(".jeanmarie_text").slideToggle();
  });

// **********  FAQ.HTML  **********

  $("main #faq_left p").hide();

  $("main #faq_left h3").click(function(){
      $(this).next().slideToggle(); 
      
    });
  $(".dropdown").click(function(){
    $(this).toggleClass("js_nav_active_box");
  });

});


//New google map test

// function initMap() {
//   var uluru = {lat: 25.789, lng: -80.140};
//   var map = new google.maps.Map(document.getElementById('map'), {
//     zoom: 16,
//     center: uluru
//   });
//   var marker = new google.maps.Marker({
//     position: uluru,
//     map: map
//   });
// }

var map;
function initMap() {
  map = new google.maps.Map(document.getElementById('map'), {
    zoom: 16,
    center: new google.maps.LatLng(25.789,  -80.140),
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
    { position: new google.maps.LatLng(25.7897423, -80.1400118),
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
//       }
//     ];

//     for (var i = 0, feature; feature = features[i]; i++) {
//       addMarker(feature);
//     }

//     var legend = document.getElementById('legend');
//     for (var key in icons) {
//       var type = icons[key];
//       var name = type.name;
//       var icon = type.icon;
//       var div = document.createElement('div');
//       div.innerHTML = '<img src="' + icon + '"> ' + name;
//       legend.appendChild(div);
//     }

//     map.controls[google.maps.ControlPosition.RIGHT_BOTTOM].push(legend);
//   }

// OLD SCRIPT BEFORE MAP CHANGE

// function initMap() {
// 	var uluru = {lat: 25.789, lng: -80.140};
// 	var map = new google.maps.Map(document.getElementById('map'), {
// 		zoom: 16,
// 		center: uluru
// 	});
// 	var marker = new google.maps.Marker({
// 		position: uluru,
// 		map: map
// 	});
// }

