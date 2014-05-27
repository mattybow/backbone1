define(["jquery","bootstrap"],function($,bs){
	var searchJQ = function(){
		console.log('initialized search');
		//collapses advanced search form
		$('#search-control input[type="submit"]').click(function(){
			$(".collapse").collapse('toggle');
			$(".form-handle").css("display","block");
		});
		//allows user to add an additional query param
		$('.btn.btn-default.add').click(function(){
			var p_holder = $(this).parents('.input-group').children('input').attr("placeholder");
			
			$(this).closest('.form-group.row').after('<div class=\"form-group row\">\r\n<div class=\"col-sm-6 col-sm-offset-2\">\r\n<div class=\"input-group\">\r\n<span class=\"input-group-btn\">\r\n<button class=\"btn btn-default toggle\" type=\"button\">&amp;<\/button>\r\n<\/span>\r\n<input type=\"text\" class=\"form-control\" id=\"sub_'+p_holder+'\" placeholder=\"'+p_holder+'\"  operand=\"and\">\r\n<span class=\"input-group-btn\">\r\n<button class=\"btn btn-default remove\" type=\"button\">-<\/button>\r\n<\/span>\r\n<\/div>');
			
			initQ_selector();
			
			function initQ_selector() {
				//removes the additional query field
				$('.btn.btn-default.remove').click(function(){
					$(this).closest('.form-group.row').remove();
				});
				//toggles the additional query field operator
				$('.toggle').unbind('click');
				$('.toggle').click(function(){
					$(this).text($(this).text()==="&" ?  "|" : "&");
					$(this).parents('.input-group').children('input').attr("operand",$(this).text()==="&" ? "and" : "or");
				});
			};
		});
		//prevents page reload
		$('#search-control').submit(function () {
		 return false;
		});
	};
	return searchJQ;
});

