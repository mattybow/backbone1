define(["jquery","underscore","backbone","dispatcher","text!templates/sidenav.html","text!templates/modals.html"],
		function($,_,Backbone,Dispatcher,sideTemplate,modalTemplate){
		var SideView = Backbone.View.extend({
			el:'.side-nav',
			initialize: function(options){
				App.Dispatcher.on("route:search",function(){
					App.Router.navigate("/search", {trigger:true});
				});
				App.Dispatcher.on("route:myvapors",function(){
					App.Router.navigate("/myvapors", {trigger:true});
				});
			},
			render: function(){
				$(this.el).html(sideTemplate);
				$('body').append(modalTemplate);
			},
			events:{
				"click #searchlink": "search",
				"click #myvapors": "myvapors"
			},
			search: function(){
				Dispatcher.trigger("route:search");
			},
			myvapors: function(){
				Dispatcher.trigger("route:myvapors");
			}
		});
		return SideView;
});