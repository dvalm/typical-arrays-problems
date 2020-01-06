
exports.min = function min (array) {
	if(arguments.length == 0 || array.length==0){
		return 0;
	}else{
		return array.reduce(function(min, current) {
			return min > current ? current : min;
		}, array[0]);
	}
}

exports.max = function max (array) {
	if(arguments.length == 0 || array.length==0){
		return 0;
	}else{
		return array.reduce(function(max, current) {
			return max > current ? max : current;
		}, array[0]);
	}
}

exports.avg = function avg (array) {
	if(arguments.length == 0 || array.length==0){
		return 0;
	}else{
		return array.reduce(function(sum, current) {
			return sum + current;
		}, 0)/array.length;
	}
}
