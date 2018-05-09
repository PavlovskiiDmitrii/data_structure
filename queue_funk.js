function Queue(){

	var arr_quue= [];

	this.Enqueue = function(element){
		arr_quue.push(element);
	};

	this.length = function(){
		return arr_quue.length;
	};

	this.Dequeue = function(){
		if(this.length() === 0){
			return null;
		}
		var front_element = arr_quue[0];
		arr_quue.splice(0, 1);
		return front_element;
	};

	this.Front = function(){
		return arr_quue[0];
	};

}