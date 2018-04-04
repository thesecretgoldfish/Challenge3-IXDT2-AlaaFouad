function getAPIdata() {

    // get latest weather
    fetch('http://api.openweathermap.org/data/2.5/forecast?q=Anaheim,us&appid=d9155b4f59d6df167bbe943731f873a7')

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
   // Render weather listing

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

   // Error

   function updateUIError() {
    var weatherBox = document.getElementById('weather');
    weatherBox.className = 'hidden';
   }

   //Format date

   function formDate(date) {
    var day = date.getDate();
    var month = date.getMonth() + 1;
    return day +'/'+ month;
   }

   // Format time

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
