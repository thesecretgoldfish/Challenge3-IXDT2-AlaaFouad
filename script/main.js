function initMap() {

  //map options, dus waar ik wil inzoomen en hoeveel ik ingezoomd wil zijn op deze plek
  //ik heb gekozen voor disneyland in California
  var options = {
    zoom:13,
    styles: [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#00ffff"
      }
    ]
  },
  {
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#ff80c0"
      }
    ]
  },
  {
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#004080"
      }
    ]
  },
  {
    "elementType": "labels.text",
    "stylers": [
      {
        "color": "#800080"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ee1153"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#c0d9e0"
      }
    ]
  },
  {
    "featureType": "administrative",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#c9b2a6"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#dcd2be"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#ae9e90"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#8000ff"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#400040"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#400040"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ffffff"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#93817c"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#a5b076"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#447530"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f5f1e6"
      }
    ]
  },
  {
    "featureType": "road.arterial",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#fdfcf8"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#f8c967"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#e9bc62"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#e98d58"
      }
    ]
  },
  {
    "featureType": "road.highway.controlled_access",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#db8555"
      }
    ]
  },
  {
    "featureType": "road.local",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#806b63"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8f7d77"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#ebe3cd"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#dfd2ae"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#b9d3c2"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#92998d"
      }
    ]
  }
],
    center:{lat:33.812511,lng:-117.918976}
  }

  //map
  var map = new google.maps.Map(document.getElementById('map'), options);
  //De Markerrr
  var marker = new google.maps.Marker({
    position:{lat:33.812511,lng:-117.918976},
    map:map,
    draggable: true,
    animation: google.maps.Animation.DROP,
  });
  var infoWindow = new google.maps.InfoWindow({
    content:'<h3>Back on Earth?<br>Visit the happiest place on this planet!<br>Beware of the change of temperature, and dress accordingly.</h3>'
  });

  marker.addListener('click', function(){
    infoWindow.open(map, marker);
  });
     }

     function toggleBounce() {
       if (marker.getAnimation() !== null) {
         marker.setAnimation(null);
       } else {
         marker.setAnimation(google.maps.Animation.BOUNCE);
       }
     }

     function getAPIdata() {

     	// get latest weather
     	fetch('http://api.openweathermap.org/data/2.5/forecast?q=Anaheim,us=html&appid=d9155b4f59d6df167bbe943731f873a7')

     	// parse to JSON format
     	.then(function(response) {
     		return response.json();
     	})

     	// render weather per day
     	.then(function(response) {

     		// render weatherCondition
     		onAPISucces(response);
     	})

     	// catch error
     	.catch(function (error) {
     		// onAPIError();
     		console.error('Request failed', error);
     	});
     }
//hier 1.
     /**
      * Render weather listing
      */
     function onAPISucces(response) {

     	var weatherList = response.list;
     	var weatherBox = document.getElementById('weather');

     	for(var i=0; i< 6; i++){


     		var dateTime = new Date(weatherList[i].dt_txt);
     		var date = formDate(dateTime);
     		var time = formTime(dateTime);
     		var temp = Math.floor(weatherList[i].main.temp - 273.15);
     		var iconUrl = 'http://openweathermap.org/img/w/'+weatherList[i].weather[0].icon+'.png';

     		forecastMessage =  '<div class="forecastMoment">';
     		forecastMessage +=   '<div class="date"> '+date+' </div>';
     		forecastMessage +=	 '<div class="time"> '+ time +' </div>';
     		forecastMessage +=	 '<div class="temp"> '+temp+'&#176;C </div>';
     		forecastMessage +=	 '<div class="icon"> <img src="'+iconUrl+'"> </div>';
     		forecastMessage += '</div>';

     		weatherBox.innerHTML += forecastMessage;
     	}
     }

     /**
      * Error
      */
     function updateUIError() {
     	var weatherBox = document.getElementById('weather');
     	weatherBox.className = 'hidden';
     }

     /**
      * Format date
      */
     function formDate(date) {
     	var day = date.getDate();
     	var month = date.getMonth() + 1;
     	return day +'/'+ month;
     }

     /**
      * Format time
      */
     function formTime(date) {
     	var hours = date.getHours();
     	if(hours<10){
     		hours = '0'+hours;
     	}
     	var minutes = date.getMinutes();
     	if(minutes < 10){
     		minutes = '0'+ minutes;
     	}
     	return hours +':'+ minutes;
     }

     // init data stream
     getAPIdata();
