var buttonConteiner;
var playListFavouriteSongs;

// functions for button Top songs  
function showTopSongs() {
  podcastSection.innerHTML = '<section id = "buttonConteiner"><section id="FavouriteSongs"><h2>Favourite</h2><ul id="playListFavouriteSongs" ></ul></section><span id="openCloseFavourite" class="icon"></span></section><section id="playListTopSongs"><ul id="TopSongsList"></ul></section>';
  buttonConteiner = document.getElementById('buttonConteiner');
  playListFavouriteSongs = document.getElementById('playListFavouriteSongs');
  createFavouriteList();
  getTopTen();

  var btnOpenClose = document.getElementById('openCloseFavourite'); //button show/hide favourite playlist
  addListener(btnOpenClose, 'click', showHideFavouritePlaylist);
  return;
};

//function show/hide favourite playList
function showHideFavouritePlaylist(e) {                                                      
    if (!e) e = window.event;
    var el = e.target || e.srcElement;
    var ul = el.parentNode.getElementsByTagName('ul')[0];
    var h2 = el.parentNode.getElementsByTagName('h2')[0];
    if (ul.style.display == 'block') { //check if folder is open
      ul.style.display = 'none';
      h2.style.display = 'none';
      buttonConteiner.style.background = '#999';
    } else {
      ul.style.display = 'block';
      h2.style.display = 'block';
      buttonConteiner.style.background = 'lightgrey';
    }
};
  // add  and check new song                                                               
function addNewSongInFavouritePlayList(e) {
  if (!e) e = window.event;
  var el = e.target || e.srcElement;
  var k = el.id[el.id.length - 1]; // song number
  var activeSong = topTenTracksResponse.toptracks.track[k];
  var list = playListFavouriteSongs;

  var elems = list.getElementsByTagName('li');
  var h2 = list.parentNode.firstChild;              

  for (var i = 0; i < elems.length; i++) {
    var li = elems[i];
    var elemsIn = li.getElementsByTagName('a');
    if (elemsIn[0].innerHTML == (activeSong.artist.name + ' — ' + activeSong.name)) {
      li.style.color = 'red';
      li.scrollIntoView(false);
      setTimeout(function () {
        li.style.color = 'black';
      }, 2000);
      if ((playListFavouriteSongs.style.display == 'none') || (playListFavouriteSongs.style.display == '')) {
        h2.style.display = 'block';
        playListFavouriteSongs.style.display = 'block';
        playListFavouriteSongs.style.background = 'lightgrey';
        buttonConteiner.style.background = 'lightgrey';
      }
      //alert("You already have had this song\n in your song list");
      return false;
    }
  }

  if ((playListFavouriteSongs.style.display == 'none') || (playListFavouriteSongs.style.display == '')) {
    h2.style.display = 'block';
    playListFavouriteSongs.style.display = 'block';
    playListFavouriteSongs.style.background = 'lightgrey';
    buttonConteiner.style.background = 'lightgrey';
  }
  var songAdd = document.createElement('li');
  var numberOfLi = list.children.length;

  songAdd.innerHTML += '<span id="btnDel-' + k + '" class="icon playList-btn delete-songs"></span><span id="btnBuy-' + k + '" class="icon playList-btn buy-songs"></span><span id="btnVideo-' + k + '"class="icon playList-btn play-songs"></span><a class="player-link">' + activeSong.artist.name + ' &#8212; ' +   activeSong.name + '</a><div id="playerFavorite-' + numberOfLi + '"class="video"></div>';
  localStorage.setItem('song number - ' + k + ' artist - ' + activeSong.artist.name, activeSong.artist.name + ' &#8212; ' + activeSong.name);
  list.appendChild(songAdd);
  newBtnDel = document.getElementById('btnDel-' + k);
  addListener(newBtnDel, 'click', deleteSongInFavoritePlaylist);
};

// buy from Amazon
function buySong(e) {
  if (!e) e = window.event;
  var el = e.target || e.srcElement;
  var dataA = el.parentNode.getElementsByTagName('a');
  var song = dataA[0].innerHTML.substring(dataA[0].innerHTML.indexOf('—') + 2, dataA[0].innerHTML.length);
  var singer = dataA[0].innerHTML.replace(/\ —.*/, '');
  var sad = singer + '-' + song;
  window.open(encodeURI('http://www.amazon.com/gp/search?ie=UTF8&keywords=' + sad));
  return false;
};

//delete from list
function deleteSongInFavoritePlaylist(e) {
  if (!e) e = window.event;
  var el = e.target || e.srcElement;
  var k = el.id[el.id.length - 1];
  var dataA = el.parentNode.getElementsByTagName('a');
  var singer = dataA[0].innerHTML.replace(/\ —.*/, '');
  var list = document.getElementById('playListFavouriteSongs');
  list.removeChild(el.parentNode);
  localStorage.removeItem('song number - ' + k + ' artist - ' + singer);
};

// <a> or <btnVideo> for open video
function showPlayer(e) {
  if (!e) e = window.event;
  var el = e.target || e.srcElement;
  var masDiv = el.parentNode.getElementsByTagName("div");
  // check-close player 
  if (masDiv[0].firstChild !== null) {
    masDiv[0].removeChild(masDiv[0].firstChild);
    return;
  }
  var masSpan = el.parentNode.getElementsByTagName("span");
  var k = masSpan[2].id[masSpan[2].id.length - 1];
  var dataA = el.parentNode.getElementsByTagName('a');
  var singer = dataA[0].innerHTML.replace(/\ —.*/, '');
  var st = dataA[0].innerHTML;
  var song = st.substring(st.indexOf('—') + 2, st.length);
  var playerId = masDiv[0].id;

  getListOfVideo(singer, song, k, playerId);
};

function getListOfVideo(singer, song, k, playerId) {
  var url = encodeURI('http://gdata.youtube.com/feeds/api/videos?alt=json&q=' + singer + song + '&start-index=1&max-results=25&v=2&key=AIzaSyCQQkDii1uTU9F7sr7FcjjQm2MaRlf20KY');
  var xhr = new XMLHttpRequest();

    xhr.open('GET', url, true);
  xhr.onreadystatechange = function () {
    if (xhr.readyState != 4) return; //return if not complete 
    if (xhr.status != 200) { //check request status      
       return ifNotConnection();     
    }
    var obj = JSON.parse(xhr.responseText);
    getSRC(obj, k, playerId);
  };
  xhr.send();
};

function getSRC(obj, k, playerId) {
  if (obj.feed.entry === undefined) {
    document.getElementById(playerId).innerHTML = 'Unfortunatelly, we  haven\'t  this data. Try another artist, please!';
  }
  var srcVideo = obj.feed.entry[0].id.$t,
      end;
    
  end = srcVideo.lastIndexOf('video:');
  videoID = srcVideo.substr(end + 6);
  var videoFrame = '<iframe src="http://www.youtube.com/embed/' + videoID + '"width="100%" height="315" frameborder="0" allowfullscreen></iframe>';
  document.getElementById(playerId).innerHTML = videoFrame;
};

function createFavouriteList() {
//localStorage.clear();
   var ul = document.getElementById('playListFavouriteSongs');
   for (var i = 0; i < localStorage.length; i++) {
    var songAdd = document.createElement('li');
    var key = localStorage.key(i);
    var k = key[key.indexOf('-') + 2];
    var numberOfLi = ul.children.length;

    songAdd.innerHTML += '<span id="btnDel-' + k + '" class="icon playList-btn delete-songs"></span><span id="btnBuy-' + k + '" class="icon playList-btn buy-songs"></span><span id="btnVideo-' + k + '"class="icon playList-btn play-songs"></span><a id="songInTop" class="player-link">' + localStorage[key] + '</a><div id="playerFavorite-' + numberOfLi + '"class="video"></div>';
    ul.appendChild(songAdd);
  }
};

//function to get Top 10 
function getTopTen() {
  var songList = document.getElementById('TopSongsList');
  var uRl = encodeURI('http://ws.audioscrobbler.com/2.0/?method=artist.gettoptracks&artist=' + choosenArtist + '&limit=10&api_key=aab1197dfa8ec061cb57aa86810a741d&format=json');
  songList.style.display = "block";
  asyncRequest('GET', uRl, function (xhr) {
    if (xhr.status != 200) { //check request status          
      return ifNotConnection();
    }
    topTenTracksResponse = JSON.parse(xhr.responseText);
    writeTopSongs(topTenTracksResponse);
  });
}

function writeTopSongs(object) {
  var songList = document.getElementById('TopSongsList');
  var loadingIcon = document.getElementById("loadingId");
  songList.innerHTML = '';
  var l = object.toptracks.track;
  if (l == undefined) {
    var noTopList = document.createElement('div');
    noTopList.innerHTML = '<img src="images/2.png" class="artist-image"><p>Unfortunatelly, we  have n\'t  this data. Try another artist, please!</p>';
    songList.appendChild(noTopList);
    return;
  }
  for (var i = 0; i < l.length; i++) {
    var song = document.createElement('li');
    var k = object.toptracks.track[i].name;
    var slist = '<span id="btnAdd-' + i + '" class=" icon playList-btn add-songs"></span><span id="btnBuy-' + i + '" class=" icon playList-btn buy-songs"></span><span id="btnVideo-' + i + '"class=" icon playList-btn play-songs"></span><a id="songInTop" class="player-link">' + object.toptracks.track[0].artist.name + ' &#8212; ' + object.toptracks.track[i].name + '</a><div id="player-' + i + '"class="video"></div>';
    song.innerHTML = slist;
    songList.appendChild(song);
  }

  // add events for our buttons
  // add-songs
  var btnAdd = document.getElementsByClassName('add-songs');
  var btnBuy = document.getElementsByClassName('buy-songs');
  var btnDelete = document.getElementsByClassName('delete-songs');
  var btnVideo = document.getElementsByClassName('play-songs');
  var btnVideoLink = document.getElementsByClassName('player-link');

  for (var d = 0; d < btnAdd.length; d++) {
    addListener(btnAdd[d], 'click', addNewSongInFavouritePlayList);
  }
  for (var j = 0; j < btnBuy.length; j++) {
    addListener(btnBuy[j], 'click', buySong);
  }
  for (var a = 0; a < btnDelete.length; a++) {
    addListener(btnDelete[a], 'click', deleteSongInFavoritePlaylist);
  }
  for (var b = 0; b < btnVideo.length; b++) {
    addListener(btnVideo[b], 'click', showPlayer);
  }
  for (var c = 0; c < btnVideoLink.length; c++) {
    addListener(btnVideoLink[c], 'click', showPlayer);
  }
};

// show biography
function showArtistData(artist) {
  artist = capitalize(artist);
  var url = encodeURI('http://ws.audioscrobbler.com/2.0/?method=artist.getinfo&artist=' + artist + '&api_key=a1b827bb5962ea81025679fd8869f5ed&format=json');
  var getData = asyncRequest('GET', url, function (art) {
    var obj = JSON.parse(art.responseText);
    if ((obj.error) || (obj.artist.image[2]['#text'] === '')){
      podcastSection.innerHTML = '<img src="images/2.png" class="artist-image"><p>Unfortunatelly, we  haven\'t  this data. Try another artist, please!</p>';
      return;
    }
    var artistInfo = {
      name: obj.artist.name,
      image: obj.artist.image[2]['#text'],
      picture: obj.artist.image[3]['#text'],
      bio: obj.artist.bio.content
    };
    return showInformation(artistInfo);
  });
};

// create new View for main
function showInformation(objData) {
    choosenArtist = capitalize(objData.name);
    var mainArtist = document.createElement('div');
    var todoBtn = document.createElement('div');
    mainArtist.id = 'main-artist';
    todoBtn.id = 'todo-btns';
    podcastSection.className = 'main-content';
    form.style.width = '100%';
    userMenu.className = 'aside-menu';
    mainArtist.innerHTML = '<img src="' + objData.image + '"><a href="#" class="btn-primary" id="bio">' + objData.name + '</a>';
    todoBtn.innerHTML = '<button id="top-songs" class="btn-small">Top Songs</button><button id="similar-singers" class="btn-small">Similar Artists</button><button class="btn-small" id="youtube">Find on youtube</button>';
    artistData.innerHTML = '';
    artistData.appendChild(mainArtist);
    artistData.appendChild(todoBtn);
    main.insertBefore(userMenu, social);
    doOnOrientationChange();
    var bio = '<p><img src="' + objData.picture + '" class="artist-image">' + objData.bio + '</p>';
    podcastSection.innerHTML = bio;
    readAbout = document.getElementById('bio');
    findVideo = document.getElementById('youtube');
    findSimilar = document.getElementById('similar-singers');
    btnTopSongs = document.getElementById('top-songs');
    addListener(readAbout, 'click', chooseFromPodcast);
    addListener(findVideo, 'click', findVideos);
    addListener(findSimilar, 'click', findSimilarArtists);
    addListener(btnTopSongs, 'click', showTopSongs);
  };

// function to find video 
function findVideos() {
  var that = choosenArtist;
  var url3;
  var url = 'https://www.youtube.com/channel/';
  var url2 = encodeURI('https://www.youtube.com/results?search_query=' + that + '&key=AIzaSyB8EY8sdC4tvarZjkP5b6un0tu0r2At3H4');

  that = that.replace(/\s+/g, '');
  url3 = encodeURI('https://www.googleapis.com/youtube/v3/search?part=snippet&q=' + that + '&key=AIzaSyB8EY8sdC4tvarZjkP5b6un0tu0r2At3H4');
  asyncRequest('GET', url3, function (x) {
    var i,
        obj = JSON.parse(x.responseText),
        mas = obj.items;

    for (i = 0; i < mas.length; i++) {
      var channelId = mas[i].snippet.channelId,
        user = mas[i].snippet.channelTitle,
        re = new RegExp(that + '*', 'i');
      if (re.test(user)) {
        url2 = url + channelId;
      }
    }
    window.open(url2);
  });
};

// find similar artists
function findSimilarArtists() {
  var url = encodeURI('http://ws.audioscrobbler.com/2.0/?method=artist.getsimilar&artist=' + choosenArtist + '&api_key=a1b827bb5962ea81025679fd8869f5ed&format=json');
  var similar = asyncRequest('GET', url, presentSimilar);
  return;
};

function presentSimilar(xhr) {
    if (xhr.status != 200) { //check request status      
      return ifNotConnection();
    };
    var obj = JSON.parse(xhr.responseText);
    if (obj.error) {
      alert(obj.message);
    }
    var i,
      singers = obj.similarartists.artist,
      podcastSimilar = document.createElement('ul');
    
    podcastSimilar.id = 'podcastSimilar';
    for (i = 0; i < singers.length; i++) {
      var photo = singers[i].image[2]['#text'];
      if (photo === '') {
        photo = 'images/2.png';
      }
      podcastSimilar.innerHTML += '<li><img src = "' + photo + '" alt="singer" ><a class="singer-name" href="#">' + singers[i].name + '</a></li>';
    }
    podcastSection.innerHTML = '<p> Here you have a list of the similar singers to ' + choosenArtist + '</p>';
    podcastSection.appendChild(podcastSimilar);
    add('singer-name', chooseFromPodcast);
    doOnOrientationChange();
  };

  // change site style

addListener(styleBtn.parentElement, 'click', function () {
  helper.style.display = 'none';
  toggleVisible(styleBtn);
});
addListener(styleBtn, 'click', setStyle);

function setStyle() {
  var radioBtn = styleBtn.getElementsByTagName('input');
  for (var ss = 0; ss < radioBtn.length; ss++) {
    if (radioBtn[ss].checked === true) {
      switch (ss) {
      case 0:
        body.className = '';
        break;
      case 1:
        body.className = 'rich-bittch';
        break;
      case 2:
        body.className = 'black-edition';
        break;
      case 3:
        body.className = 'ua';
        break;
      }
    }
  }
 
  return;
};
