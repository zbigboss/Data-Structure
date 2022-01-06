/**
 * 选择排序
 * 原理：注重索引的选择，每次选择最小/最大的那个数的索引，
 * 然后再和数组的两端交换位置（和冒泡排序的遍历方式有点类似，
 * 异在选择排序只和最小的数作比较，冒泡则是相邻的两个数作比较）
 */
function selectSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) minIndex = j;
    }
    let temp = arr[i]
    arr[i] = arr[minIndex]
    arr[minIndex] = temp
  }
  return arr
}