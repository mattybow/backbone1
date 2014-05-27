define(["jquery",
		"underscore",
		"backbone",
		"text!templates/vapor.html"],function($,_,Backbone,vaporTemp){
		var VaporView = Backbone.View.extend({
			tagName:'div',
			id: 'Vapor',
			initialize: function(){
			},
			render: function(){
				this.$el.html(vaporTemp);
				return this;
			},
			events:{
			}
		});
		return VaporView;
});