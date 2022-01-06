/**
 * 希尔排序（壳排序）
 * 原理：缩小增量的排序，是对插入排序的一个改装，
 * 不断对数组进行二分，然后逐一比较，交换位置，若
 * 数组长度为奇数，则最后进行一次直接插入排序
 * 稳定性：不稳定
 */
function shellSort(arr) {
  for (let gep = parseInt(arr.length / 2); gep > 0; gep = parseInt(gep / 2)) {
    for (let i = gep; i < arr.length; i++) {
      let j = i;
      let insertNum = arr[j];
      while (j >= 0 && insertNum < arr[j - gep]) {
        arr[j] = arr[j - gep];
        j -= gep
      }
      arr[j] = insertNum
    }
  }
  return arr
}