function merge(arr1, arr2) {
  const res = []
  let i = 0;
  let j = 0;

  while(i < arr1.length && j < arr2.length){
    if(arr1[i] > arr2[j]){
      res.push(arr1[i])
      i++
    } else {
      res.push(arr2[j])
      j++
    }
  }

  while(i < arr1.length){
    res.push(arr1[i]);
    i++
  }
  while(j < arr2.length){
    res.push(arr2[j]);
    j++
  }
  return res;
}

function mergeSort(arr) {
  if(arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, mid));
  const right = mergeSort(arr.slice(mid))
  return merge(left, right)
}

console.log(mergeSort([4,20,12,10,7,9]))
console.log(mergeSort([0,-10,7,4]))

module.exports = { merge, mergeSort};