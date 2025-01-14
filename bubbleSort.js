let listNums = [1,8,17,2,23,3,48,51,600,71,12,8,5,9,11,10,6,250,45,34,2,16,22,18,55]


const bubbleSort =(array)=>{
    let unsorted = true;

    while (unsorted) {
       unsorted = false;
       console.log(array);
        for (let i = 0; i < array.length-1; i++) {
            let numOne = array[i];
            let numTwo = array[i+1];
            
            if (array[i]>array[i+1]) {
                
                array[i] = numTwo;
                array[i+1] = numOne;
                unsorted = true
            }
        }
        
        
    }
}

bubbleSort(listNums)