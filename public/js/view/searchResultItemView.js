define(['jquery','underscore','backbone','text!templates/searchResultItem.html'],
 function ($, _, Backbone, SRItem_temp) {
	'use strict';

	var srItemView = Backbone.View.extend({
		//produces 1 row per searchResult
		tagName:'a',
		/*attributes:function(){
			return{'href':'/view/'+this.model.get('id')};
		},*/
		template: _.template(SRItem_temp),

		// The DOM events specific to an item.
		events: {
			"click":"viewVapor",
			"mouseenter": "toggleSelected",
			"mouseleave": "toggleSelected",
			
		},

		initialize: function () {
			this.listenTo(this.model, 'change', this.reRender);
		},
		
		render: function () {
			this.$el.html(this.template(this.model.toJSON()));
			return this;
		},
		
		reRender: function(){
			if (this.model.isSelected()) {
				this.$el.children().addClass('selected');
			} else {
				this.$el.children().removeClass('selected');
			}
		},
		
		viewVapor:function(ev){
			App.Dispatcher.trigger('vaporTriggered', ev);
			App.Router.navigate("/view/"+this.model.get('id'), {trigger:true});
		},

		toggleSelected:function(){
			this.model.toggleSelected();
		}

	});

	return srItemView;
});
