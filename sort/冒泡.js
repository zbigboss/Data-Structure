var arr = [7,4,5,3,6,2,1,9,0];
var arr1 = new Array(100000);
for(let i=0;i<100000;i++){
    arr1[i] = Math.floor((Math.random()*100000));
}
//冒泡排序
function bubbleSort(arr) {
  var len = arr.length;
  for (var i = 0; i < len - 1; i++) {
    for (var j = 0; j < len - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {       // 相邻元素两两对比
        var temp = arr[j + 1];       // 元素交换
        arr[j + 1] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}