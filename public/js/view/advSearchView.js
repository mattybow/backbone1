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

			renderPartial:function(){
				_.each(this.model.changedAttributes(),function(v,k){
					var selector = '#' + k;
					if ($(selector).is("input")) {
						$(selector).val(v);
					} else if ($(selector).is("button")) {
						$(selector).text(v);
					}
				});
			},
			
			renderAgain:function(){
				console.log(this.$el);
				this.setElement(this.$el).render();
				//return this;
			},
			
			events:{
				"click #date_selector":"toggleDateSelection",
				"focusout input[type='text']":"saveVal",
				"click #clearform":"clearForm"
			},
			
			clearForm:function(){
				this.model.set(this.model.defaults);
			},

			toggleDateSelection:function(){
				this.model.toggleDateSelector();
			},
			
			saveVal:function(ev){
				var attribute = ev.target.id
				var obj = {};
				obj[attribute]=$('#' + attribute).val()
				this.model.set(obj);
			}
			
		});
		return AdvSearchView;
});