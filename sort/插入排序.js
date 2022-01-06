/**
 *插入排序
 原理：先把需要插入的数字暂存起来，再将此数字和前面的数字
 进行逐一比较，直到不满足条件为止，最后再将暂存的数字赋值
 给跳出循环时，当前的索引
 */
function insertSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let j = i + 1;
    let insertNum = arr[j];
    while (j >= 1 && insertNum < arr[j - 1]) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = insertNum;
  }
  return arr
}