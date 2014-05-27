define(['jquery','underscore','backbone','text!templates/vaporListItem.html'],
 function ($, _, Backbone, vaporListItemTemplate) {
	'use strict';

	var vaporListItemView = Backbone.View.extend({
		//produces 1 row per vaporListItem
		tagName:  'tr',

		template: _.template(vaporListItemTemplate),

		// The DOM events specific to an item.
		events: {
			"click": "viewVapor"
		},

		initialize: function () {
			this.listenTo(this.model, 'change', this.render);
		},
		
		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			// each list item view evaluates whether or not to make its el visible based on the model's state
			if (this.model.isHidden()) {
				this.$el.addClass('hidden');
			} else {
			// if it's not hidden, then also evaluate whether it should be highlighted red
				if (this.model.isHot()) this.$el.addClass('danger');
			}
			return this;
		},
		
		viewVapor:function(){
			console.log('target acquired');
			Router.navigate("/view/"+this.model.get('id'), {trigger:true});
		}

	});

	return vaporListItemView;
});
