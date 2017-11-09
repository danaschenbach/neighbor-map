var map;
var infoWindow;
var markers = [];
var vm;
	//locations list-would normally be in database
var myLocations = [
	{name: "Jim's Steaks", type: "Food", latlngLoc: {lat: 39.941557, lng: -75.149310}},
	{name: "Theater of the Living Arts", type: "Entertainment", latlngLoc: {lat: 39.941461, lng: -75.148745}},
	{name: "Inferno Body Piercing", type: "Body Art", latlngLoc: {lat: 39.941932, lng: -75.152870}},
	{name: "South Street Diner", type: "Food", latlngLoc: {lat: 39.940978, lng: -75.145252}},
	{name: "Philadelphia's Magic Gardens", type: "Entertainment", latlngLoc: {lat: 39.942642, lng: -75.159285}}
];
// create styles array
function initMap() {
	//create new map
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 39.941557, lng: -75.149310},
		zoom: 12,
		styles: styles,
		mapTypeControl: false
	});
	//makes list clickable & ties together with markers
	var Pin = function(data) {
		this.name = ko.observable(data.name);
		this.type = ko.observable(data.type);
	};	

	var ViewModel = function() {
		var self = this;

		this.pinList = ko.observableArray([]);

/*		myLocations.forEach(function(pinItem) {
			self.pinList.push(new Pin(pinItem));
		});*/

		this.currentPin = ko.observable(this.pinList()[0]);
// Modified filter function, original by Blake Watson on codepen
		self.myLocations = myLocations;
		self.selectedType = ko.observable("All");
		self.filteredmyLocations = ko.computed(function(pinItem) {
			var type = self.selectedType();
			if(type === "All") {
	// iterate over self.myLocations & set marker to visible
				return self.myLocations;
			} else {
				var tempList = self.myLocations.slice();
				return tempList.filter(function(myLocation) {
					var match = myLocation.type === type;
					console.log(myLocation)
					myLocation.marker.setVisible(match)
					return match;
				});
			}
		});
		this.setPin = function(clickedPin) {
			largeInfoWindow.marker = null;
			self.currentPin(clickedPin);
			showInfoWindow(clickedPin.marker, largeInfoWindow);
			loadData(clickedPin.name);
		};
	};
	vm = new ViewModel();
	ko.applyBindings(vm);

	var largeInfoWindow = new google.maps.InfoWindow();

	var bounds = new google.maps.LatLngBounds();

	var defaultIcon = makeIcon('blue-pushpin.png');

	var highlightIcon = makeIcon('grn-pushpin.png');
	//array of markers per location
	function makeMarkers(i) {
		var position = myLocations[i].latlngLoc;
		var name = myLocations[i].name;
		var type = myLocations[i].type;
			var marker = new google.maps.Marker({
				map: map,
				position: position,
				name: name,
				type: type,
				animation: google.maps.Animation.DROP,
				icon: defaultIcon,
				id: i
		});

		vm.myLocations[i].marker = marker;

		markers.push(marker);

		marker.addListener('click', function() {
			showInfoWindow(this, largeInfoWindow);
			loadData(name);
		});

		bounds.extend(markers[i].position);

		map.fitBounds(bounds);

		marker.addListener('mouseover', function() {
			this.setIcon(highlightIcon);
		});
		marker.addListener('mouseout', function() {
			this.setIcon(defaultIcon);
		});
	}

	for (var i=0; i < myLocations.length; i++) {
		makeMarkers(i);
		console.log(markers);
	}
}

var loadError = function() {
	console.log("Sorry but I can't comply");
	window.alert("Sorry but I can't comply");
};
	//populates info window on clicked marker
function showInfoWindow(marker, infoWindow) {
	if (infoWindow.marker != marker) {
		infoWindow.setContent('');
		infoWindow.marker = marker;
		marker.setAnimation(google.maps.Animation.BOUNCE);
		setTimeout(function() {
			marker.setAnimation(null);
		}, 1350);
		infoWindow.addListener('closeclick', function() {
			infoWindow.marker = null;
		});
		var streetViewService = new google.maps.StreetViewService();
		var radius = 50;

var getStreetView = function(data, status) {
			if (status == google.maps.StreetViewStatus.OK) {
				var nearStreetViewLocation = data.location.latLng;
				var heading = google.maps.geometry.spherical.computeHeading(
					nearStreetViewLocation, marker.position);
					infoWindow.setContent('<div>' + marker.name + '</div><div id="pano"></div');
					var panoramaOptions = {
						position: nearStreetViewLocation,
						pov: {
							heading: heading,
							pitch: 30
						}
					};
				var panorama = new google.maps.StreetViewPanorama(
					document.getElementById('pano'), panoramaOptions);
			} else {
				infoWindow.setContent('<div>' + marker.name + '</div>' +
					'<div>No Street View</div>');
			}
		};
		streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
		infoWindow.open(map, marker);	
	}
}

function showPins() {
	var bounds = new google.maps.LatLngBounds();
	for (var i=0; i < markers.length; i++) {
		markers[i].setMap(map);
		bounds.extend(markers[i].position);
	}
	map.fitBounds(bounds);
}

function hidePins() {
	for (var i=0; i < markers.length; i++) {
		markers[i].setMap(null);
	}
}

function makeIcon(markerColor) {
	var markerImage = new google.maps.MarkerImage(
		'http://maps.google.com/mapfiles/ms/micons/' + markerColor);
	return markerImage;
}
//takes input locates it then zooms in to area
function zoomToArea() {
	var geo = new google.maps.Geocoder();
	var locate = zoomtotext.value;

	if (locate === '') {
		window.alert("Sorry, I can't find 'nothing' ");
	} else {
		geo.geocode(
			{address: locate,
				componentRestrictions: {locality: 'Philadelphia'}
			}, function(results, status) {
				if (status == google.maps.GeocoderStatus.OK) {
					map.setCenter(results[0].geometry.location);
					map.setZoom(15);
				} else {
					window.alert('Could not find location' +
						' Be more specific');
				}
			});
	}
}
//finds wiki info for clicked list item
function loadData(name) {
	var $wikiElem = $('#wiki-links');

	$wikiElem.text("");

	var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + name + '&format=json&callback=wikiCallback';

	$.ajax({
		url: wikiUrl,
		dataType: "jsonp",
		jsonp: "callback"
	}).done(function(response) {
		var articleList = response[1];
		console.log(response);
		for (var i = 0; i < articleList.length; i++) {
			articleStr = articleList[i];
			var url = 'http://en.wikipedia.org/wiki/' + articleStr;
			$wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>');
			}
	}).fail(function (jqXHR, textStatus) {
		window.alert('could not get wiki info');
	});
}
