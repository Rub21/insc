require('mapbox.js');
document.location.hash = '';
var token = 'pk.eyJ1IjoicnViZW4iLCJhIjoiYlBrdkpRWSJ9.JgDDxJkvDn3us36aGzR6vg';
var mapid = 'ruben.n9e0l5jk';

L.mapbox.accessToken = token;
var map = L.mapbox.map('map', mapid, {
	infocontrol: true,
	zoomControl: true,
	center: [-13, -74],
	zoom: 10
});
var assetLayerGroup = L.layerGroup().addTo(map);
map.on('click', function(e) {
	//map.panTo(e.latlng);
	assetLayerGroup.clearLayers();

	var latlon = e.latlng.toString().replace('LatLng(', '').replace(')', '').replace(' ', '').split(',').reverse();
	var point = {
		"type": "FeatureCollection",
		"features": [{
			"type": "Feature",
			"properties": {},
			"geometry": {
				"type": "Point",
				"coordinates": latlon
			}
		}]
	}
	L.geoJson(point, {
		style: L.mapbox.simplestyle.style
	}).addTo(assetLayerGroup);
});