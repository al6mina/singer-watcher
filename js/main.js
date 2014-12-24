// MAIN PART 
// function to get user location
function getLocation() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(getPosition, showError);
  } else {
    console.log('Geolocation is not supported by this browser.');
    userCountry = 'Spain';
    showTopForCountry(userCountry);
  }
}

function getUserCountry(xhr) {
  var  end;    
  if (xhr.status != 200) { //check request status          
    return ifNotConnection();
  };
  var obj = JSON.parse(xhr.responseText);
  userCountry = obj.results[0].formatted_address;
  end = userCountry.lastIndexOf(',');
  userCountry = userCountry.substr(end + 2);
  showTopForCountry(userCountry);
};

function getPosition(position) {
  var latlon = position.coords.latitude + ',' + position.coords.longitude;
  var url = 'https://maps.googleapis.com/maps/api/geocode/json?latlng=' + latlon + '&sensor=false';
  var userPosition = asyncRequest('GET', url, getUserCountry);
};

//---------errors of get location and default user location
function showError(error) {
    userCountry = 'Spain';
    showTopForCountry(userCountry);
    switch (error.code) {
    case error.PERMISSION_DENIED:
      messageForUser = 'You denied the request for Geolocation. We show default infomation';
      alert(messageForUser);
      break;
    case error.POSITION_UNAVAILABLE:
      messageForUser = 'Location information is unavailable.';
      break;
    case error.TIMEOUT:
      messageForUser = 'The request to get user location timed out.';
      break;
    case error.UNKNOWN_ERROR:
      messageForUser = 'An unknown error occurred.';
      break;
    }
  };
  // ------------ to show top singer of userCountry
function showTopForCountry() {
  var url = 'http://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country=' + userCountry + '&api_key=a1b827bb5962ea81025679fd8869f5ed&format=json';
  var countryTop = asyncRequest('GET', url, prettyShow);
  return countryTop;
};

function prettyShow(xhr) {
  var obj = {};

  if (xhr.status != 200) { //check request status      
    return ifNotConnection();
  };
  obj = JSON.parse(xhr.responseText);
  var i,
    singers = obj.topartists.artist,
    podcastList = document.createElement('ul');
  podcastList.id = 'countryTop';

  for (i = 0; i < 20; i++) {
    podcastList.innerHTML += '<li><img src = "' + singers[i].image[2]['#text'] + '" alt="singer"><a class="singer-name" href="#">' + singers[i].name + '</a></li>';
  }
  podcastSection.innerHTML = '<h3> Here you have a list of the most popular singers of <strong>' + userCountry + '</strong> !</h3>';
  podcastSection.appendChild(podcastList);
  return add('singer-name', chooseFromPodcast);
};

// function which take all elements by classname and addEventListener
function add(className, callback) {
  var a = document.getElementsByClassName(className);
  for (var i = 0; i < a.length; i++) {
    addListener(a[i], 'click', callback);
  }
};

//take choosen artist from podcast
function chooseFromPodcast(e) {
  if (!e) e = window.event;
  var element = e.target || e.srcElement;
  choosenArtist = element.innerHTML;
  form.getElementsByTagName('span')[0].style.display = 'none';
  showArtistData(choosenArtist);
  return false;

};

function chooseTheArtist(e) {
  if (!e) e = window.event;    
  var who = document.getElementById('singerMain').value;
  document.getElementById('singerMain').value = '';    
  if (!who) {
    form.getElementsByTagName('span')[0].style.display = 'block';
    e.preventDefault = e.preventDefault || function() {
      this.returnValue = false; 
    }
    return false;
  } 
    form.getElementsByTagName('span')[0].style.display = 'none';
    choosenArtist = capitalize(who);
    who = '';
    return showArtistData(choosenArtist);;
  
};

function showHelp() {
    styleBtn.style.display = 'none';
    return toggleVisible(helper);
};

getLocation();
addListener(window, 'orientationchange', doOnOrientationChange);
addListener(btn, 'click', chooseTheArtist);
addListener(helpBtn, 'click', showHelp);