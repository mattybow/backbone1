define(["jquery",
		"underscore",
		"backbone",
		"view/searchResultView",
		"text!templates/header.html"],function($,_,Backbone,SRView,headerTemplate){
		var HeaderView = Backbone.View.extend({
			el:'header',
			childViews:[],
			initialize: function(){
				this.listenTo(App.Dispatcher,'vaporTriggered', this.searchShrink);
			},
			render: function(){
				$(this.el).html(headerTemplate);
			},
			renderSRHandle:function(e){
				var c = e.which;
				if(!this.childViews.length && !e.shiftKey && ((c >= 48 && c <= 90) || (c >= 96 && c <=105))){
					this.renderSR();
				} else if (!e.shiftKey && ((c >= 48 && c <= 90) || (c >= 96 && c <=105))) {
					this.reRenderSR();
				} else if (c==40 && ($('.searchbar input').val())) { 
					this.downSel();
				} else if (c==38 && ($('.searchbar input').val())) { 
					this.upSel();
				} else if (c==8 && !($('.searchbar input').val())){
					this.childViews[0].close();
					this.childViews.shift();
				}
			},
			renderSR:function(){
				$('.searchbar').append(this.resultDisplay());
			},
			reRenderSR:function(){
				console.log('refine results');
			},
			downSel:function(){
				console.log('select next');
			},
			upSel:function(){
				console.log('select prev');
			},
			events:{
				"click .searchbar input":"searchGrow",
				//"focusout .searchbar input":"searchShrink",
				"keyup .searchbar input":"renderSRHandle",
				"click .searchbar i.fa-times":"searchShrink"
			},

			searchGrow:function(e){
				if (!$('.searchbar').hasClass('expand')){
					$('.headernav').toggleClass('hidden');  //hide headernav
					$('.searchbar').toggleClass('expand');  //expand searchbar
					$(e.target).select();					//select input text
					setTimeout(this.hideResults, 200);      //show results if there are any
				}
			},

			searchShrink:function(){
				this.hideResults();
				setTimeout("$('.headernav').toggleClass('hidden');", 200);
				$('.searchbar').toggleClass('expand');
			},

			hideResults:function(){
				if ($('.results')) $('.results').toggleClass('hidden');
			},

			resultDisplay:function(){
				var srView = new SRView();
				this.childViews.push(srView);
				return this.childViews[0].render().el;
			}
			
		});
		return HeaderView;
});