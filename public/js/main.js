requirejs.config({
	paths: {
		jquery:"http://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.1/jquery.min",
		bootstrap:"http://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/3.1.1/js/bootstrap.min",
		underscore:"http://cdnjs.cloudflare.com/ajax/libs/underscore.js/1.6.0/underscore-min",
		backbone:"http://cdnjs.cloudflare.com/ajax/libs/backbone.js/1.1.2/backbone-min",
		autosize:"jquery.autosize.min",
		dropzone:"dropzone",
		datepicker:"lib/bootstrap-datepicker",
		lodash:"http://cdnjs.cloudflare.com/ajax/libs/lodash.js/2.4.1/lodash.min",
		text: 'lib/text',
		templates: '../templates'},
	shim: {
		'backbone':{
			deps:['underscore','jquery'],
			exports: 'Backbone'
		},
		'autosize':{
			deps:['jquery'],
			exports: 'autosize'
		}
	}
});

require(["jquery","underscore","backbone","view/appView","router"],
	function($,_,Backbone,AppView,Router){
		var appView = new AppView();
		Router.initialize({appView:appView});
});