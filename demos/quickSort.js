
// 快速排序

var array = [9,15,10,3,6,13,5,2,11,15,5,4,11,7];
console.time('quickSort');
function quickSort(array) {
	if(array.length <= 1){
		return array;
	}
	var arr1 = [];
	var arr2 = [];
	var middle = array[0];
	for (var i=1, len=array.length; i<len; i++) {
		if (array[i] <= middle) {
			arr1.push(array[i]);
		} else {
			arr2.push(array[i]);
		}
	}
	//console.log(arr1, arr2);
	return quickSort(arr1).concat(middle).concat(quickSort(arr2));
}

var result = quickSort(array);
console.timeEnd('quickSort');
console.log(result);

var list = [9,15,10,3,6,13,5,2,11,15,5,4,11,7];//[5,3,6,2,1,4,7,9,8];
var num = 0;
console.time('冒泡');
for(var i=0; i<list.length; i++){
	var flag = false;
	for(var j=0; j<list.length - i; j++){
		if(list[j] > list[j+1]){
			var temp = list[j];
			list[j] = list[j+1];
			list[j+1] = temp;
			
			flag = true;
		}
	}
	if(!flag){break;}
}
console.timeEnd('冒泡');