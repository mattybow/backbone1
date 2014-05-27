define(["jquery",
		"underscore",
		"backbone",
		"text!templates/vaporEdit.html"],function($,_,Backbone,vaporEditTemp){
		var VaporView = Backbone.View.extend({
			tagName:'div',
			id: 'VaporEdit',
			initialize: function(){
			},
			render: function(){
				this.$el.html(vaporEditTemp);
				return this;
			},
			events:{
			}
		});
		return VaporView;
});