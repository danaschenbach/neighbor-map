var map;

var markers = [];

function initMap() {
	var styles = [
    {
        "featureType": "all",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": "-100"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "saturation": 36
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 40
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "administrative",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 17
            },
            {
                "weight": 1.2
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 20
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#4d6059"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#4d6059"
            }
        ]
    },
    {
        "featureType": "landscape.natural",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#4d6059"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 21
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#4d6059"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#4d6059"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "color": "#7f8d89"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#7f8d89"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#7f8d89"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#7f8d89"
            },
            {
                "lightness": 29
            },
            {
                "weight": 0.2
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 18
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#7f8d89"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#7f8d89"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 16
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#7f8d89"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#7f8d89"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#000000"
            },
            {
                "lightness": 19
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "color": "#2b3638"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2b3638"
            },
            {
                "lightness": 17
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#24282b"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#24282b"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
];
	map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 39.941557, lng: -75.149310},
		zoom: 13,
		styles: styles,
		mapTypeControl: false
	});

	var myLocations = [
		{name: "Jim's Steaks", latlngLoc: {lat: 39.941557, lng: -75.149310}},
    	{name: "Theater of the Living Arts", latlngLoc: {lat: 39.941461, lng: -75.148745}},
    	{name: "Inferno Body Piercing", latlngLoc: {lat: 39.941932, lng: -75.152870}},
    	{name: "South Street Diner", latlngLoc: {lat: 39.941032, lng: -75.145230}},
    	{name: "Philadelphia's Magic Gardens", latlngLoc: {lat: 39.942642, lng: -75.159285}}
	];

	var Pin = function(data) {
		this.name = ko.observable(data.name);
	};

	var ViewModel = function() {
		var self = this;

		this.pinList = ko.observableArray([]);

		myLocations.forEach(function(pinItem){
			self.pinList.push(new Pin(pinItem));
		});

		this.currentPin = ko.observable(this.pinList()[0]);

		this.setPin = function(clickedPin) {
            largeInfoWindow.marker = null;
			self.currentPin(clickedPin);
            showInfoWindow(markers[clickedPin.name.Gc-2], largeInfoWindow);
            loadData(markers[clickedPin.name.Gc-2].name);
		};

	};
	ko.applyBindings(new ViewModel());


	var largeInfoWindow = new google.maps.InfoWindow();

    var bounds = new google.maps.LatLngBounds();

	var defaultIcon = makeIcon('blue-pushpin.png');

	var highlightIcon = makeIcon('grn-pushpin.png');

	function makeMarkers(i) {
    	var position = myLocations[i].latlngLoc;
    	var name = myLocations[i].name;
    		var marker = new google.maps.Marker({
        		map: map,
                position: position,
        		name: name,
        		animation: google.maps.Animation.DROP,
        		icon: defaultIcon,
        		id: i
    	});

    	markers.push(marker);

    	marker.addListener('click', function() {
    		showInfoWindow(this, largeInfoWindow);
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
    }

    document.getElementById('show-pins').addEventListener('click', showPins);
    document.getElementById('hide-pins').addEventListener('click', hidePins);
    document.getElementById('zoom-to-area').addEventListener('click', function() {
    	zoomToArea();
    });
}

function showInfoWindow(marker, infoWindow) {
	if (infoWindow.marker != marker) {
		infoWindow.setContent('');
		infoWindow.marker = marker;
    }
		infoWindow.addListener('closeclick', function() {
			infoWindow.marker = null;
		});
}
//function getStreetView(data, status) {
var getStreetView = function(data, status) {
	if (status == google.maps.StreetViewStatus.OK) {
		var nearStreetViewLocation = data.location.latLng;
		var heading = google.maps.geometry.spherical.computeHeading(
			nearStreetViewLocation, marker.position);
			infoWindow.setContent('<div>' + marker.name + '</div><div id="pano"></div');
			}
	streetViewService.getPanoramaByLocation(marker.position, radius, getStreetView);
	infoWindow.open(map, marker);	
	};
};

var showPins = function() {
	var bounds = new google.maps.LatLngBounds();
	for (var i=0; i < markers.length; i++) {
		markers[i].setMap(map);
		bounds.extend(markers[i].position);
	}
	map.fitBounds(bounds);
};

var hidePins = function() {
	for (var i=0; i < markers.length; i++) {
		markers[i].setMap(null);
	}
};

var makeIcon = function(markerColor) {
	var markerImage = new google.maps.MarkerImage(
		'http://maps.google.com/mapfiles/ms/micons/' + markerColor);
	return markerImage;
};

var zoomToArea = function() {
	var geo = new google.maps.Geocoder();
	var locate = document.getElementById('zoom-to-text').value;

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
};

var loadData = function(name) {
	var $wikiElem = $('#wiki-links');

	$wikiElem.text("");

	var wikiUrl = 'http://en.wikipedia.org/w/api.php?action=opensearch&search=' + name + '&format=json&callback=wikiCallback';
    var wikiRequestTimeout = setTimeout(function(){
        $wikiElem.text("failed to get wiki links");
    }, 8000);

    $.ajax({
        url: wikiUrl,
        dataType: "jsonp",
        jsonp: "callback",
        success: function( response ) {
            var articleList = response[1];

            for (var i = 0; i < articleList.length; i++) {
                articleStr = articleList[i];
                var url = 'http://en.wikipedia.org/wiki/' + articleStr;
                $wikiElem.append('<li><a href="' + url + '">' + articleStr + '</a></li>');
            }

            clearTimeout(wikiRequestTimeout);
        }
    });
    return false;
};
