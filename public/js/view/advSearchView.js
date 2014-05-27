define(["jquery",
		"underscore",
		"backbone",
		"datepicker",
		"model/advSearch",
		"view/searchJQ",
		"text!templates/advSearch.html"],function($,_,Backbone,DatePicker,AdvSearch,JQ,advSearch_temp){
		var AdvSearchView = Backbone.View.extend({
			tagName:'div',
			id: 'advSearch',
			template: _.template(advSearch_temp),
			postRender:function(){
				JQ();
				this.datepicker = $("#dateinput").datepicker();
			},
			
			initialize: function(){
				this.model = new AdvSearch();
				this.listenTo(this.model, 'change', this.renderPartial);
			},
			
			render: function(){
				this.$el.html(this.template(this.model.toJSON()));
				return this;
			},

			diff: function(obj1, obj2){
				var output = {};
				_.each(obj1,function(v,k){
					if (obj2[k] !== v) output[k]=v;
				});
				return output;
			},

			renderPartial:function(self,rendered){
				var diffs = this.diff(self.attributes,self._previousAttributes);
				_.each(diffs,function(v,k){
					var selector = '#' + k;
					$(selector).text(v);
				});
			},
			
			events:{
				"click #date_selector":"toggleDateSelection"
			},

			toggleDateSelection:function(){
				this.model.toggleDateSelector();
			}
			
		});
		return AdvSearchView;
});