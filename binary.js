let listNums = [1,2,3,4,5,6,7,8,9,10]



const binarySearch = (searchTerm,arr)=>{
  let lowerBound = 0
  let upperBound = arr.length -1
  let midpoint = Math.floor((upperBound + lowerBound)/2)
  
   
  while (upperBound>lowerBound) {
    console.log('step');
    
    if (searchTerm > arr[midpoint]) {
      lowerBound = midpoint
      midpoint = Math.floor((upperBound + lowerBound)/2)
    } 
    else if(searchTerm < arr[midpoint]){
      upperBound = midpoint
      midpoint = Math.floor((upperBound + lowerBound)/2)
    }
    else {
      console.log(`returning ${midpoint}`);
      
        return midpoint
    }
   
    
  }


}

binarySearch(6,listNums)