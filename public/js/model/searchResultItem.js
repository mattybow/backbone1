define(['underscore','backbone'], function (_, Backbone) {
	var SearchResultItem = Backbone.Model.extend({
		defaults: {
			id: '',
			title:'',
			selected:false
		},
		
		url: "/search",
		
		isSelected: function(){
			return this.get('selected');
		},
		
		toggleSelected:function(){
			this.set({selected:!this.isSelected()});
		}

	});
	return SearchResultItem;
});
