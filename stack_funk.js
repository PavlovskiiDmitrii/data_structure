function Stack() { 
	var arr_stack =[];

	this.length = function(){
		return arr_stack.length;
	};

	this.push = function(elenemt){
		arr_stack.push(elenemt);
	};

	this.pop = function(){
		if(this.length === 0){
			return null;
		}
		var pop_element = arr_stack[arr_stack.length-1]; 
		arr_stack.splice((arr_stack.length-1), 1);
		return pop_element;
	};

	this.pick = function(){
		if(this.length === 0){
			return null;
		}
		return arr_stack[arr_stack.length-1];
	};
}
