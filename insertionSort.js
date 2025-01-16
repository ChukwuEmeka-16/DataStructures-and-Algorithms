let listNums = [8,17,2,23,3,48,51,600,71,12,8,5,9,11,10,6,250,45,34,2,16,22,18,55,1]

// false uodate 1

// false update 2

// not working, ill try again tomorrow

const insertionSort = (array)=>{
    let temp_val_index = 1;
    for(let o = 0; o < array.length; o++) {
        console.log(array);
        
        for (let i = temp_val_index ; i !=0; i--) {
            
            if (array[temp_val_index] < array[i-1]) {
                let numOne = array[i];
                let numTwo = array[i-1];
                array[i] = numTwo;
                array[i-1] =numOne;
            }
            else{
                break;
            }
            
        }

        temp_val_index++;
    }
}

insertionSort(listNums)