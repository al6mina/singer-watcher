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
 var sw = angular.module("swApp", []);


sw.controller ("ArtistCtrl", ['$scope', function($scope) {
	$scope.artists = [
		{src: 'images/artist.jpg', name: "ARTIST1"},
		{src: 'images/artist.jpg', name: "ARTIST2"},
		{src: 'images/artist.jpg', name: "ARTIST3with VeryLongName"},
		{src: 'images/artist.jpg', name: "ARTIST4"},
		{src: 'images/artist.jpg', name: "ARTIST5"},
		{src: 'images/artist.jpg', name: "ARTIST6"},
		{src: 'images/artist.jpg', name: "ARTIST7"}
	];	
}]);