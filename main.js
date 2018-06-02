function bubbleSort(arr){
    var temp;
    for(var j = 0; j<arr.length; j++){
        for(var i = 0; i < arr.length-1; i++){
            if(arr[i] > arr[i+1]){
                temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
    }
    return arr
}

// Recursively
const rbubbleSort = function (array, pointer = array.length - 1) {
    // Base Case
    if (pointer === 0) {
      return array;
    }
  
    for (let i = 0; i < pointer; i++) {
      if (array[i] > array[i + 1]) {
        let temp = array[i + 1];
        array[i + 1] = array[i];
        array[i] = temp;
      }
    }   
    // Recursive call on smaller portion of the array
    return bubbleSort(array, pointer - 1);  
  };

console.log(bubbleSort([11,120,4,3,71,9]));