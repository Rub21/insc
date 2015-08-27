require('mapbox.js');
document.location.hash = '';
var token = 'pk.eyJ1IjoicnViZW4iLCJhIjoiYlBrdkpRWSJ9.JgDDxJkvDn3us36aGzR6vg';
var mapid = 'ruben.n9e0l5jk';

L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapid, {
	infocontrol: true,
	zoomControl: true,	
	center: [51.505, -0.09],
	zoom: 13
});