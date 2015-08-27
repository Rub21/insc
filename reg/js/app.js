L.mapbox.accessToken = 'pk.eyJ1IjoicnViZW4iLCJhIjoiYlBrdkpRWSJ9.JgDDxJkvDn3us36aGzR6vg';
var click = document.getElementById('click'),
    mousemove = document.getElementById('mousemove');

var map = L.mapbox.map('map', 'mapbox.streets');

map.on('mousemove click', function(e) {
    window[e.type].innerHTML = e.containerPoint.toString() + ', ' + e.latlng.toString();
});