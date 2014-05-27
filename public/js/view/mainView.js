define(["jquery","underscore","backbone","view/vaporListView","view/advSearchView", "view/vaporView","view/vaporEditView"],
		function($,_,Backbone,VaporListView,AdvSearchView,VaporView,VaporEditView){
		var MainView = Backbone.View.extend({
			el:'#content',
			initialize: function(options){
				this.viewList = {
					vaporList:VaporListView, 
					advSearch:AdvSearchView,
					vaporView:VaporView,
					vaporEditView:VaporEditView
				}
			},
			render: function(option){
				if (this.innerView) {
					console.log('closing '+this.innerView.id);
					this.innerView.close();
				}
				var view = option.view;
				this.innerView = new this.viewList[view];
				$(this.el).html(this.innerView.render().el);
				if(this.innerView.postRender) this.innerView.postRender();
			},

			events:{
			}
		});
		return MainView;
});