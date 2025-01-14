let listNums = [8,17,2,23,3,48,51,600,71,12,8,5,9,11,10,6,250,45,34,2,16,22,18,55,1]


// selection sort update

const selectionSort = (array) =>{
    let unsorted = true;``
    let toBeSortedIndex = 0;
    
    while (unsorted) {
        let lowestNumberIndex=toBeSortedIndex;
        unsorted = false;

        for (let i = toBeSortedIndex; i < array.length; i++){ 
            if (array[i] < array[lowestNumberIndex]){
                lowestNumberIndex = i;
                unsorted = true
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