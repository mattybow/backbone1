define([
	'underscore',
	'backbone',
	'model/searchResultItem'
], function (_, Backbone, SRItem) {
	'use strict';

	var SearchResultCollection = Backbone.Collection.extend({
		// Reference to this collection's model.
		model: SRItem,
		
		url: "/search",
		
		fetch: function(){
			return true;
		},

		comparator: function (searchResultItem) {
			return searchResultItem.get('id');
		}
	});

	return SearchResultCollection;
});