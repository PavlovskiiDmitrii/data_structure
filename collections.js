function Collection(){
	var collection = [];
	this.has = function(element){
		return (collection.indexOf(element) !== -1);
	};

	this.add = function(element){
		collection.push(element);
	};

	this.remove = function(element){
		if(this.has(element)){
			collection.splice(collection.indexOf(element),1);
			return true;
		}
		return false;
	};

	this.values = function() {
		return collection;
	};

	this.size = function() {
		return collection.length;
	};

	this.Union =function(any_collection){
		any_collection.forEach(function(item, i, arr) {
			if(collection.has(item)){
				
			}
		});
	};

}