define([
	'underscore',
	'backbone',
	'model/vaporListItem'
], function (_, Backbone, VaporListItem) {
	'use strict';
	console.log('creating collection');

	var VaporListCollection = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: VaporListItem,
		
		url: "/myvapors",
		
		fetch: function(){
			return true;
		},

		comparator: function (vaporlistitem) {
			return vaporlistitem.get('id');
		}
	});

	return VaporListCollection;
});
