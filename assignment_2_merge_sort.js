// even number items
const unsorted_array_1 = [6, 7, 5, 3, 8, 2, 4, 1];
// odd number items
const unsorted_array_2 = [7, 3, 5, 2, 6, 4, 1];
// repeated numbers
const unsorted_array_3 = [2, 5, 3, 2, 4, 3];
// only 1 number
const unsorted_array_4 = [1];
// no number
const unsorted_array_5 = [];

function merge_sort(source_array, left = 0, right = source_array.length - 1) {
  const mid = Math.trunc((left + right) / 2);
  let target_sort = [];
  let left_array = [];
  let right_array = [];
  if (left == mid && mid == right) return [source_array[left]];
  if (left <= mid) left_array = merge_sort(source_array, left, mid);
  if (mid < right) right_array = merge_sort(source_array, mid + 1, right);
  for (
    let i = 0, j = 0, k = 0;
    k < left_array.length + right_array.length;
    k++
  ) {
    if (i >= left_array.length && j < right_array.length) {
      target_sort.push(right_array[j++]);
      continue;
    }
    if (j >= right_array.length && i < left_array.length) {
      target_sort.push(left_array[i++]);
      continue;
    }
    if (left_array[i] < right_array[j]) target_sort.push(left_array[i++]);
    else target_sort.push(right_array[j++]);
  }
  return target_sort;
}
console.log(merge_sort(unsorted_array_1));
console.log(merge_sort(unsorted_array_2));
console.log(merge_sort(unsorted_array_3));
console.log(merge_sort(unsorted_array_4));
console.log(merge_sort(unsorted_array_5));
