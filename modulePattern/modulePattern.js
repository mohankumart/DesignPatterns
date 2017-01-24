/**
 * Module Pattern
 */

+function(root){
	//root is window
	function Student(name){
		this.name = name;
	}
	
	if(typeof exports === 'object'){
		module.exports = Student;
	}else{
		root.Student = Student;
	}
}(this);