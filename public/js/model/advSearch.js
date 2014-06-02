define(['underscore','backbone'], function (_, Backbone) {
	var AdvSearch = Backbone.Model.extend({
		defaults: {
			vapor: '',
			title: '',
			description:'',
			owner:'',
			status:'active',
			module:'',
			dateinput:'',
			date_selector:'created',
			hidden: false
		},
		
		url: "/myvapors",
		
		isHidden: function(){
			return this.get('hidden');
		},

		toggleStatus: function(){
			this.status = this.status==='active' ? 'inactive':'active';
		},

		toggleDateSelector: function(){
			this.set({date_selector : this.get('date_selector')==='created' ? 'updated':'created'});
		},
		
		toggleVisible: function(){
			this.set({hidden:!this.get('hidden')});
		}
	});
	return AdvSearch;
});