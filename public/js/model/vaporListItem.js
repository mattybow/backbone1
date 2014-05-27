define(['underscore','backbone'], function (_, Backbone) {
	var VaporListItem = Backbone.Model.extend({
		defaults: {
			id: '001',
			title: 'This is an example vapor',
			description:'description can go here',
			module:'RULEpkg',
			status:'dev',
			dev:'cangell',
			pi:'jmahmood',
			tr:'pmanduskar',
			child:'',
			parent:'',
			priority:'hot',
			updated: new Date("December 17, 1995 03:24:00"),
			hidden: false
		},
		
		url: "/myvapors",
		
		isHot: function(){
			return this.get('priority')==='hot';
		},
		
		isHidden: function(){
			return this.get('hidden');
		},
		
		toggleVisible: function(){
			this.set({hidden:!this.get('hidden')});
		}
	});
	return VaporListItem;
});