// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'dispatcher'
], function ($, _, Backbone,Dispatcher) {
  var AppRouter = Backbone.Router.extend({
    routes: {
      // Pages
	  '':'homeroute',
      'myvapors':'myvapors',
	  'search':'search',
	  'view/:id':'view',
	  'edit/:id':'editVapor'
    }
  });

  var initialize = function(options){
    window.App.Router = new AppRouter();
	window.App.Dispatcher = Dispatcher;
	var appView = options.appView;
    App.Router.on('route:homeroute', function () {
	  appView.render();
    });
	
	App.Router.on('route:myvapors', function () {
      appView.renderMain({view:'vaporList'});
    });
	
	App.Router.on('route:search', function () {
      appView.renderMain({view:'advSearch'});
    });
	
	App.Router.on('route:view', function (id) {
      appView.renderMain({view:'vaporView'});
    });
	
	App.Router.on('route:editVapor', function (id) {
      appView.renderMain({view:'vaporEditView'});
    });
	
	Backbone.history.start({pushState:true});
   };
   return {initialize:initialize};
});