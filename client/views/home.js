
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
            var marker = new google.maps.Marker({
                position: {
                    lat: e.latLng.k,
                    lng: e.latLng.D
                },
                map: map
            })
        })
    });
};