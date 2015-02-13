
Template.home.rendered = function() {
	GoogleMaps.init(
    {
        'sensor': true, //optional
        //'key': 'MY-GOOGLEMAPS-API-KEY', //optional
        //'language': 'de' //optional
    }, 
    function(){
        var mapOptions = {
            zoom: 14,
            center: {
                lat: 45.759723,
                lng: 4.842223
            },
            disableDefaultUI: true
        };
        map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions); 
        console.log(map);

        google.maps.event.addListener(map, 'click', function(e) {
            console.log(e.latLng.D);
            console.log(e.latLng.k);
            var marker = {
                position: {
                    lat: e.latLng.k,
                    lng: e.latLng.D
                }
            };
            Meteor.call('createMarker', marker, function(error, newMarker) {
                if (error) {
                    console.log(error);
                } else {
                    var mapMarker = new google.maps.Marker(newMarker);
                    mapMarker.setMap(map);
                }
            })
        })
    });
};