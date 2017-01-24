/**
 * New node file
 */

(function test($, window){
	var foo = 'Hello';
	var bar = 'World!'
	  
	function baz(){
		return foo + ' ' + bar;
	}

	window.baz = baz;
})(jQuery, window);

+function test($, window){
	var foo = 'Hello';
	var bar = 'World!'
	  
	function baz(){
		return foo + ' ' + bar;
	}

	window.baz = baz;
}(jQuery, window);

!function test($, window){
	var foo = 'Hello';
	var bar = 'World!'
	  
	function baz(){
		return foo + ' ' + bar;
	}

	window.baz = baz;
}(jQuery, window);


