define(["jquery",
		"underscore",
		"backbone",
		"popover",
		"text!templates/vapor.html"],function($,_,Backbone,Popover,vaporTemp){
		var VaporView = Backbone.View.extend({
			tagName:'div',
			id: 'Vapor',
			initialize: function(){
			},
			render: function(){
				this.$el.html(vaporTemp);
				return this;
			},
			postRender:function(){
				$('#vapor-link').optionsPopover({
					id:"vapor-link",
					title: "linked vapors",
					contents:[
						{"name":"001:Trying to get"},
						{"name":"001:Making Cookies"},
						{"name":"001:Getting ahead"}
					]
				});
			},
			events:{
			}
		});
		return VaporView;
});