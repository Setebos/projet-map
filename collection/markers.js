Markers = new Meteor.Collection('markers');

Markers.deny({
    update: function() {
        return true;
    },
    insert: function() {
        return true;
    },
    remove: function() {
        return true;
    }
});

Meteor.methods({
	createMarker: function(marker) {
		console.log('create marker');

		var newMarker = _.extend(_.pick(marker, 'position'));
		Markers.insert(newMarker);
		return newMarker;
	}
})