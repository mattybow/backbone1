define(["jquery",
		"underscore",
		"backbone",
		"model/vaporListItem",
		"view/vaporListItemView",
		"collection/vaporList",
		"text!templates/vaporList.html"],function($,_,Backbone,VaporModel,VaporListItem,VaporListCollection,vaporList_temp){
		var VaporList = Backbone.View.extend({
			tagName:'div',
			id: 'vaporList',
			childViews:[],
			initialize: function(){
				var mod1 = new VaporModel({id:'001', priority:'1'});
				var mod2 = new VaporModel({id:'002', title:'this is a really long vapor title i dunno why anyone would write something so long but I just want to see what happens to the table when you have a really long value', priority:'2'});
				var mod3 = new VaporModel({id:'003'});
				this.collection = new VaporListCollection([mod1,mod2,mod3]);
				//console.log(this.collection.length);
				
				this.listenTo(this.collection, 'reset', this.addAll);
				this.listenTo(this.collection, 'change:completed', this.filterOne);
				this.listenTo(this.collection, 'filter', this.filterAll);
				
				//this.collection.fetch({reset:true});
				
			},
			
			render: function(){
				this.$el.html(vaporList_temp);
				//this.addAll();
				return this;
			},

			postRender: function(){
				this.addAll();
			},
			
			addOne: function (vaporListItem) {
				//instantiate a view for one model
				var view = new VaporListItem({ model: vaporListItem });
				this.childViews.push(view);
				$('tbody').append(view.render().el);
			},
			
			addAll: function(){
				this.$('tbody').html('');
				//loop thru all the collection's views and instantiate views for each
				this.collection.each(this.addOne, this);
			},
			
			reorder: function(){
			},
			
			filterOne: function (todo) {
				//todo.trigger('visible');
			},
			
			events:{
			}
		});
		return VaporList;
});