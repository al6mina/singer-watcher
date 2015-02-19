//listener for orientation change
function doOnOrientationChange() {    
  if ((window.orientation === 0) && (window.innerWidth <= 480)) {
     userMenu.insertBefore(podcastSection, form);
     return;
   }    
   main.insertBefore(podcastSection, social);
   return;       
}
//---------- page 404
function ifNotConnection() {
  var win404 = window.open('404/404.html', '_self');
  return;
}

//-------------addeventListener for all browsers
function addListener(elem, evType, fn) {
    if (window.attachEvent === true) {
      elem.addEventListener(evType, fn, false);
      return fn;
    }
    var newFn = function () {
      fn.call(elem);
    };
      elem.attachEvent('on' + evType, newFn);
    return newFn;
  }
//listener for orientation change
function doOnOrientationChange() {    
  if ((window.orientation === 0) && (window.innerWidth <= 480)) {
     userMenu.insertBefore(podcastSection, form);
     return;
   }    
   main.insertBefore(podcastSection, social);
   return;       
}
//---------- page 404
function ifNotConnection() {
  var win404 = window.open('404/404.html', '_self');
  return;
}

//-------------addeventListener for all browsers
function addListener(elem, evType, fn) {
    if (window.attachEvent === true) {
      elem.addEventListener(evType, fn, false);
      return fn;
    }
    var newFn = function () {
      fn.call(elem);
    };
      elem.attachEvent('on' + evType, newFn);
    return newFn;
  }
//listener for orientation change
function doOnOrientationChange() {    
  if ((window.orientation === 0) && (window.innerWidth <= 480)) {
     userMenu.insertBefore(podcastSection, form);
     return;
   }    
   main.insertBefore(podcastSection, social);
   return;       
}
//---------- page 404
function ifNotConnection() {
  var win404 = window.open('404/404.html', '_self');
  return;
}

//-------------addeventListener for all browsers
function addListener(elem, evType, fn) {
    if (window.attachEvent === true) {
      elem.addEventListener(evType, fn, false);
      return fn;
    }
    var newFn = function () {
      fn.call(elem);
    };
      elem.attachEvent('on' + evType, newFn);
    return newFn;
  }
//listener for orientation change
function doOnOrientationChange() {    
  if ((window.orientation === 0) && (window.innerWidth <= 480)) {
     userMenu.insertBefore(podcastSection, form);
     return;
   }    
   main.insertBefore(podcastSection, social);
   return;       
}
//---------- page 404
function ifNotConnection() {
  var win404 = window.open('404/404.html', '_self');
  return;
}

//-------------addeventListener for all browsers
function addListener(elem, evType, fn) {
    if (window.attachEvent === true) {
      elem.addEventListener(evType, fn, false);
      return fn;
    }
    var newFn = function () {
      fn.call(elem);
    };
      elem.attachEvent('on' + evType, newFn);
    return newFn;
  }
//listener for orientation change
function doOnOrientationChange() {    
  if ((window.orientation === 0) && (window.innerWidth <= 480)) {
     userMenu.insertBefore(podcastSection, form);
     return;
   }    
   main.insertBefore(podcastSection, social);
   return;       
}
//---------- page 404
function ifNotConnection() {
  var win404 = window.open('404/404.html', '_self');
  return;
}

//-------------addeventListener for all browsers
function addListener(elem, evType, fn) {
    if (window.attachEvent === true) {
      elem.addEventListener(evType, fn, false);
      return fn;
    }
    var newFn = function () {
      fn.call(elem);
    };
      elem.attachEvent('on' + evType, newFn);
    return newFn;
  }
//listener for orientation change
function doOnOrientationChange() {    
  if ((window.orientation === 0) && (window.innerWidth <= 480)) {
     userMenu.insertBefore(podcastSection, form);
     return;
   }    
   main.insertBefore(podcastSection, social);
   return;       
}
//---------- page 404
function ifNotConnection() {
  var win404 = window.open('404/404.html', '_self');
  return;
}

//-------------addeventListener for all browsers
function addListener(elem, evType, fn) {
    if (window.attachEvent === true) {
      elem.addEventListener(evType, fn, false);
      return fn;
    }
    var newFn = function () {
      fn.call(elem);
    };
      elem.attachEvent('on' + evType, newFn);
    return newFn;
  }
//listener for orientation change
function doOnOrientationChange() {    
  if ((window.orientation === 0) && (window.innerWidth <= 480)) {
     userMenu.insertBefore(podcastSection, form);
     return;
   }    
   main.insertBefore(podcastSection, social);
   return;       
}
//---------- page 404
function ifNotConnection() {
  var win404 = window.open('404/404.html', '_self');
  return;
}

//-------------addeventListener for all browsers
function addListener(elem, evType, fn) {
    if (window.attachEvent === true) {
      elem.addEventListener(evType, fn, false);
      return fn;
    }
    var newFn = function () {
      fn.call(elem);
    };
      elem.attachEvent('on' + evType, newFn);
    return newFn;
  }
//listener for orientation change
function doOnOrientationChange() {    
  if ((window.orientation === 0) && (window.innerWidth <= 480)) {
     userMenu.insertBefore(podcastSection, form);
     return;
   }    
   main.insertBefore(podcastSection, social);
   return;       
}
//---------- page 404
function ifNotConnection() {
  var win404 = window.open('404/404.html', '_self');
  return;
}

//-------------addeventListener for all browsers
function addListener(elem, evType, fn) {
    if (window.attachEvent === true) {
      elem.addEventListener(evType, fn, false);
      return fn;
    }
    var newFn = function () {
      fn.call(elem);
    };
      elem.attachEvent('on' + evType, newFn);
    return newFn;
  }
var userCountry,
  findVideo,
  findSimilar,
  readAbout,
  btnTopSongs;
var messageForUser = '';
var podcastSection = document.getElementById('podcast');
var choosenArtist = ' ';
var userMenu = document.getElementById('user-menu');
var artistData = document.getElementById('artist-data');
var helper = document.getElementById('helper');
var form = document.getElementById('getArtist');
var btn = document.getElementById('search-singer');
var helpBtn = document.getElementById('help');
var main = document.getElementsByTagName('main')[0];
var social = document.getElementById('social');
var body = document.getElementsByTagName('body')[0];
var topTenTracksResponse = {};
var styleBtn = document.getElementById('userStyle');
var userCountry,
  findVideo,
  findSimilar,
  readAbout,
  btnTopSongs;
var messageForUser = '';
var podcastSection = document.getElementById('podcast');
var choosenArtist = ' ';
var userMenu = document.getElementById('user-menu');
var artistData = document.getElementById('artist-data');
var helper = document.getElementById('helper');
var form = document.getElementById('getArtist');
var btn = document.getElementById('search-singer');
var helpBtn = document.getElementById('help');
var main = document.getElementsByTagName('main')[0];
var social = document.getElementById('social');
var body = document.getElementsByTagName('body')[0];
var topTenTracksResponse = {};
var styleBtn = document.getElementById('userStyle');
var userCountry,
  findVideo,
  findSimilar,
  readAbout,
  btnTopSongs;
var messageForUser = '';
var podcastSection = document.getElementById('podcast');
var choosenArtist = ' ';
var userMenu = document.getElementById('user-menu');
var artistData = document.getElementById('artist-data');
var helper = document.getElementById('helper');
var form = document.getElementById('getArtist');
var btn = document.getElementById('search-singer');
var helpBtn = document.getElementById('help');
var main = document.getElementsByTagName('main')[0];
var social = document.getElementById('social');
var body = document.getElementsByTagName('body')[0];
var topTenTracksResponse = {};
var styleBtn = document.getElementById('userStyle');
var userCountry,
  findVideo,
  findSimilar,
  readAbout,
  btnTopSongs;
var messageForUser = '';
var podcastSection = document.getElementById('podcast');
var choosenArtist = ' ';
var userMenu = document.getElementById('user-menu');
var artistData = document.getElementById('artist-data');
var helper = document.getElementById('helper');
var form = document.getElementById('getArtist');
var btn = document.getElementById('search-singer');
var helpBtn = document.getElementById('help');
var main = document.getElementsByTagName('main')[0];
var social = document.getElementById('social');
var body = document.getElementsByTagName('body')[0];
var topTenTracksResponse = {};
var styleBtn = document.getElementById('userStyle');
var userCountry,
  findVideo,
  findSimilar,
  readAbout,
  btnTopSongs;
var messageForUser = '';
var podcastSection = document.getElementById('podcast');
var choosenArtist = ' ';
var userMenu = document.getElementById('user-menu');
var artistData = document.getElementById('artist-data');
var helper = document.getElementById('helper');
var form = document.getElementById('getArtist');
var btn = document.getElementById('search-singer');
var helpBtn = document.getElementById('help');
var main = document.getElementsByTagName('main')[0];
var social = document.getElementById('social');
var body = document.getElementsByTagName('body')[0];
var topTenTracksResponse = {};
var styleBtn = document.getElementById('userStyle');
var userCountry,
  findVideo,
  findSimilar,
  readAbout,
  btnTopSongs;
var messageForUser = '';
var podcastSection = document.getElementById('podcast');
var choosenArtist = ' ';
var userMenu = document.getElementById('user-menu');
var artistData = document.getElementById('artist-data');
var helper = document.getElementById('helper');
var form = document.getElementById('getArtist');
var btn = document.getElementById('search-singer');
var helpBtn = document.getElementById('help');
var main = document.getElementsByTagName('main')[0];
var social = document.getElementById('social');
var body = document.getElementsByTagName('body')[0];
var topTenTracksResponse = {};
var styleBtn = document.getElementById('userStyle');
var userCountry,
  findVideo,
  findSimilar,
  readAbout,
  btnTopSongs;
var messageForUser = '';
var podcastSection = document.getElementById('podcast');
var choosenArtist = ' ';
var userMenu = document.getElementById('user-menu');
var artistData = document.getElementById('artist-data');
var helper = document.getElementById('helper');
var form = document.getElementById('getArtist');
var btn = document.getElementById('search-singer');
var helpBtn = document.getElementById('help');
var main = document.getElementsByTagName('main')[0];
var social = document.getElementById('social');
var body = document.getElementsByTagName('body')[0];
var topTenTracksResponse = {};
var styleBtn = document.getElementById('userStyle');
var userCountry,
  findVideo,
  findSimilar,
  readAbout,
  btnTopSongs;
var messageForUser = '';
var podcastSection = document.getElementById('podcast');
var choosenArtist = ' ';
var userMenu = document.getElementById('user-menu');
var artistData = document.getElementById('artist-data');
var helper = document.getElementById('helper');
var form = document.getElementById('getArtist');
var btn = document.getElementById('search-singer');
var helpBtn = document.getElementById('help');
var main = document.getElementsByTagName('main')[0];
var social = document.getElementById('social');
var body = document.getElementsByTagName('body')[0];
var topTenTracksResponse = {};
var styleBtn = document.getElementById('userStyle');