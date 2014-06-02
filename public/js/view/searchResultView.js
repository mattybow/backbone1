define(["jquery",
		"underscore",
		"backbone",
		"model/searchResultItem",
		"view/searchResultItemView",
		"collection/searchResults"],function($,_,Backbone,SRModel,SRItemView,SRCollection){
		var SearchResults = Backbone.View.extend({
			tagName:'div',
			className: 'results',
			childViews:[],
			initialize: function(){
				var mod1 = new SRModel({id:'001', title:'this is an example title'});
				var mod2 = new SRModel({id:'002', title:'here\'s another title yall'});
				var mod3 = new SRModel({id:'003', title:'i love using vapor'});

				this.collection = new SRCollection([mod1,mod2,mod3]);
				console.log('created SR collection');
				//console.log(this.collection.length);
				
				//this.listenTo(this.collection, 'reset', this.addAll);
				//this.listenTo(this.collection, 'change:completed', this.filterOne);
				//this.listenTo(this.collection, 'filter', this.filterAll);
				
				//this.collection.fetch({reset:true});
				
			},
			
			render:function(){
				this.addAll();
				return this;
			},

			
			addOne: function (srItem) {
				//instantiate a view for one model
				var itemView = new SRItemView({ model: srItem });
				this.childViews.push(itemView);
				$(this.el).append(itemView.render().el);
			},
			
			addAll: function(){
				//$(this.el).html('');
				//loop thru all the collection's views and instantiate views for each
				this.collection.each(this.addOne, this);
			},
			
			reorder: function(){
			},
			
			filter: function (a) {
				console.log(a.currentTarget);
			},
			
			events:{
			}
		});
		return SearchResults;
});