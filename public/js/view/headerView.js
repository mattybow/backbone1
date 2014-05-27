define(["jquery",
		"underscore",
		"backbone",
		"text!templates/header.html"],function($,_,Backbone,headerTemplate){
		var HeaderView = Backbone.View.extend({
			el:'header',
			initialize: function(){
			},
			render: function(){
				$(this.el).html(headerTemplate);
			},
			events:{
			}
		});
		return HeaderView;
});