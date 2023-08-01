function filteredArray(arr, elem) {
  let newArr = [];
  let count=0;
  // Only change code below this line
    for(let i=0;i<arr.length;i++)
    {
        for(let j=0;j<arr[i].length;j++)
        {
           if(arr[i][j]!== elem)
          {
             count++
          } 
        }
       
     if(count == arr[i].length)
      {
        newArr.push(arr[i])
      }
     count=0
    }
  // Only change code above this line
  return newArr;
}

console.log(filteredArray([[10, 8, 3], [14, 6, 23], [3, 18, 6]], 18));