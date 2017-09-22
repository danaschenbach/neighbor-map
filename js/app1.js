var map;

var markers = [];

var placeMarkers = [];

function initMap() {
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 39.941557, lng: -75.149310},
		zoom: 13
	});
}

var myLocations = [
	{name: "Jim's Steaks", latlngLoc: {lat: 39.941557, lng: -75.149310}},
    {name: "Theater of the Living Arts", latlngLoc: {lat: 39.941321, lng: -75.148744}},
    {name: "Jon's Bar & Grille", latlngLoc: {lat: 39.941308, lat: -75.147777}},
    {name: "South Street Diner", latlngLoc: {lat: 39.941032, lng: -75.145230}},
    {name: "Mason-Dixon Survey Historical Marker", latlngLoc: {lat: 39.940975, lng: -75.144052}}
];

var largeInfoWindow = new google.maps.InfoWindow();

//var defaultIcon = makeMarkerIcon('http://google.com/mapfiles/ms/micons/blue-pushpin.png');

//var highlightedIcon = makeMarkerIcon('http://google.com/mapfiles/ms/micons/ylw-pushpin.png');

for (var i=0; i < myLocations.length; i++) {
    var position = myLocations[i].latlngLoc;
    var name = myLocations[i].name;
    var marker = new google.maps.Marker({
        position: position,
        name: name,
        animation: google.maps.Animation.DROP,
//        icon: defaultIcon,
        id: i
    });

    markers.push(marker);

    marker.addListener('click', function() {
    	showInfoWindow(this, largeInfoWindow);
    });

    document.getElementById('show-pins').addEventListener('click', showPins);
    document.getElementById('hide-pins').addEventListener('click', hidePins);
}

function showPins() {
	var bounds = new google.maps.LatLngBounds();
	for (var i=0; i < markers.length; i++) {
		markers[i].setMap(map);
		bounds.extend(markers[i].position);
	}
	map.fitBounds(bounds);
}

function showInfoWindow(marker, infoWindow) {
	if (infoWindow.marker != marker) {
		infoWindow.marker = marker;
		infoWindow.setContent('<div>' + marker.name + '</div>');
		infoWindow.open(map, marker);

		infoWindow.addListener('closeclick', function() {
			infoWindow.marker = null;
		});
	}
}

function hidePins() {
	for (var i=0; i < markers.length; i++) {
		markers[i].setMap(null);
	}
}