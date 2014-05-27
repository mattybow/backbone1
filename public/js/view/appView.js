define(["jquery","underscore","backbone","text!templates/layout.html","view/headerView","view/sideView","view/mainView"],
function($,_,Backbone,layoutTemplate,HeaderView,SideView,MainView){
	var AppView = Backbone.View.extend({
		el:'body.inner',
		
		initialize:function(){
			_.extend(Backbone.View.prototype, {
			  close: function(){
				this.remove();
				this.unbind();
				_.each(this.childViews,function(childview){
					childview.close();
				},this.childViews);
			  }
			});
		},
		
		render:function(){
			$(this.el).html(layoutTemplate);
			
			//instantiates the header nav
			if (!this.headerView) {
				this.headerView = new HeaderView;
			}
			this.headerView.render();
			
			//instantiates the side nav view
			if (!this.sideView) {
				this.sideView = new SideView;
			}
			this.sideView.render();
			
			//instantiates the main view with vaporList
			if (this.mainView) this.mainView.remove();
			this.mainView = new MainView;
			this.mainView.render({view:'vaporList'});
		},
		
		//method for just instantiating the mainview
		renderMain:function(options){
			if(!this.mainView){
				this.render();
			}
			this.mainView.render(options);
		},
		
		events:{
		}
		
	});
	
	return AppView;
});