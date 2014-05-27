// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone'
], function ($, _, Backbone) {
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
    window.Router = new AppRouter();
	var appView = options.appView;
    Router.on('route:homeroute', function () {
	  appView.render();
    });
	
	Router.on('route:myvapors', function () {
      appView.renderMain({view:'vaporList'});
    });
	
	Router.on('route:search', function () {
      appView.renderMain({view:'advSearch'});
    });
	
	Router.on('route:view', function (id) {
      appView.renderMain({view:'vaporView'});
    });
	
	Router.on('route:editVapor', function (id) {
      appView.renderMain({view:'vaporEditView'});
    });
	
	Backbone.history.start({pushState:true});
   };
   return {initialize:initialize};
});