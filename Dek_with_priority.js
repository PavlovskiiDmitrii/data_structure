function Deque(){
	  var length = 0,
			max_priority,
			min_priority,
			left_head = null,
			right_head = null,
			arr_values = [],
			arr_nodes = [];

	Deque.prototype.toString = function(){
		var str = "";
		arr_values.forEach(function(item){
			str += item + ", ";
		});
		return str;
	};

	var Node = function(element, priority){
		this.left_node = null;
		this.right_node = null;
		this.value = element;
		if(priority === undefined || priority < 0){
			this.priority = 0;
			test_pryority(this);
		}else{
			this.priority = priority;
			test_pryority(this);
		}
	};

	var delete_node = function(node, i){
		if(i == length-1){
			node.left_node.right_node = null;
			right_head = node.left_node;
			node.left_node = null;
			node = null;
			arr_values.splice(length-1,1);
			arr_nodes.splice(length-1, 1);
			length--;
		}else{
			if( i == 0){
				node.right_node.left_node = null;
				left_head = node.right_node;
				node.right_node = null;
				node = null;
				arr_values.splice(0,1);
				arr_nodes.splice(0, 1);
				length--;
			}else{
				node.left_node.right_node = node.right_node;
				node.right_node.left_node = node.left_node;
				node.left_node = null;
				node.right_node = null;
				node = null;
				arr_values.splice(i,1);
				arr_nodes.splice(i, 1);
				length--;
			}
		}
	};

	var set_max_priority = function(){
		max_priority = 0;
		arr_nodes.forEach(function(item, i ){
			if(item.priority > max_priority){
				max_priority = item.priority;
			}
		});
	};

	var test_pryority = function(node){

		if(min_priority === undefined){
			min_priority = node.priority;
		}
		if(max_priority === undefined){
			max_priority = node.priority;
		}

		if(node.priority > max_priority){
			max_priority  = node.priority;
		}
		if(node.priority < min_priority){
			min_priority  = node.priority;
		}
	};

	this.max_priority = function(){

		return max_priority;
	};

	this.min_priority = function(){

		return min_priority;
	};

	this.Length = function(){

		return length;
	};

	this.IsEmpte = function(){
		if(left_head === null){
			return true;
		}
		return false;
	};

	this.Clear = function(){
		arr_nodes.forEach(function(item, i, arr){
			item.left_node = null;
			item.right_node = null;
			item = null;
		});
		left_head = right_head = null;
		arr_values.length = 0;
		arr_nodes.length = 0;
	};

	this.View_values = function(){

		return arr_values;
	};

	this.View_nodes = function(){

		return arr_nodes;
	};

	this.Push_right = function(element, priority){
		var cerrent_node = new Node(element, priority);
		arr_values.push(cerrent_node.value);
		arr_nodes.push(cerrent_node);
		if(right_head !== null){
			right_head.right_node = cerrent_node;
			cerrent_node.left_node = right_head;
			right_head = cerrent_node;
			length++;
		}else{
			left_head = right_head = cerrent_node;
			length = 1;
		}
	};

	this.Push_left = function(element, priority){
		var cerrent_node = new Node(element, priority);
		if(left_head !== null){
			left_head.left_node = cerrent_node;
			cerrent_node.right_node = left_head;
			left_head = cerrent_node;
			length++;
		}else{
			left_head = right_head = cerrent_node;
			length = 1;
		}
		arr_values.unshift(cerrent_node.value);
		arr_nodes.unshift(cerrent_node);
	};

	this.Pop_right  = function(){
		if(length !== 0){
			var right_value = right_head.value;
			arr_values.splice(arr_values.length-1, 1);
			arr_nodes.splice(arr_nodes.length-1, 1);

			if(length == 1){
				right_head = left_head = null;
				length--;
				return right_value;
			}

			right_head = right_head.left_node;
			right_head.right_node = null;
			length--;
			return right_value;

		}
		return null;
	};

	this.Pop_left  = function(){
		if(length !== 0){
			var left_value = left_head.value;
			arr_values.splice(0,1);
			arr_nodes.splice(0, 1);
			if(length > 1){
				left_head = left_head.right_node;
				left_head.left_node = null;
				length--;
				return left_value;
			}
			if(length == 1){
				left_head = right_head = null;
				length--;
				return left_value;
			}
		}
		return null;
	};

	this.Pop_right_max = function(){
		if(length !== 0){
			if(length == 1){
				var right_value_max = right_head.value;
				right_head = left_head = null;
				arr_values.splice(0,1);
				arr_nodes.splice(0, 1)
				length--;
				return right_value_max;
			}
			for(var i = length-1 ; i >= 0 ; i --){
				if(arr_nodes[i].priority == max_priority){
					var right_value_max = arr_nodes[i].value;
					delete_node(arr_nodes[i], i);
					set_max_priority();
					return right_value_max;
				}
			}
		}
		return null;
	};

	this.Pop_left_max = function(){
		if(length !== 0){
			if(length == 1){
				var left_value_max = left_head.value;
				right_head = left_head = null;
				arr_values.splice(0,1);
				arr_nodes.splice(0, 1);
				length--;
				return left_value_max;
			}

			for(var i = 0; i < length; i++){
				if(arr_nodes[i].priority == max_priority){
					var left_value_max = arr_nodes[i].value;
					delete_node(arr_nodes[i], i);
					set_max_priority();
					return left_value_max;
				}
			}

		}
		return null;
	};
}

/*
	max_priority() -> максимальный приоретет в очереди
	min_priority() -> минимальный приоретет в очереди
	Length()       -> длина
	IsEmpty()      -> догадайся*
	Clear()        -> очистка очереди
	View_values()  -> Вывод массива значений очереди 
   View_nodes()   -> Вывод массива nod*ов из очереди 
   Push_right     -> Добавление элемента справа
   Push_left      -> Добавление элемента слева
   Pop_right      -> Вывод значения правого элемента и его удаление
   Pop_left       -> Вывод значения левого элемента и его удаление
   Pop_right_max  -> Вывод значения правого элемента c учётом приоретета и его удаление
   Pop_left_max   -> Вывод значения левого элемента c учётом приоретета и его удаление
   */

   var Deq = new Deque();
   Deq.Push_right("4 пошёл",4);
   Deq.Push_right("3 пошёл",3);
   Deq.Push_right("4 пошёл",4);
   Deq.Push_right("0 пошёл",0);
   Deq.Push_right("4 пошёл",4);
   Deq.Push_right("3 пошёл",3);

   Deq.Pop_right_max(); 
   Deq.Pop_left_max();


   alert(Deq);
     Deq.Push_right("3 пошёл",3);
        alert(Deq);