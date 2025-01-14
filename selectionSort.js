let listNums = [1,8,17,2,23,3,48,51,600,71,12,8,5,9,11,10,6,250,45,34,2,16,22,18,55]



const selectionSort = (array) =>{
   
    let toBeSortedIndex = 0;
    
    for(let o = 0; o < array.length; o++) {
        let lowestNumberIndex=toBeSortedIndex;
        

        for (let i = toBeSortedIndex; i < array.length; i++){ 
            if (array[i] < array[lowestNumberIndex]){
                lowestNumberIndex = i;
                
            }
        }

        let numOne = array[toBeSortedIndex];
        array[toBeSortedIndex] = array[lowestNumberIndex]
        array[lowestNumberIndex] = numOne;
        toBeSortedIndex++
        console.log(array);
        
    }
    
}

selectionSort(listNums)