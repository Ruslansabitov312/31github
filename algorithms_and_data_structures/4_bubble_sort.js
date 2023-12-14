const arr = [10, 0, 3, 2, 5, 6, 8, 1, 4]
let count = 0;

function bubbleSort(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = 0; j < array.length; j++) {
            if(array[j + 1] < array[j]) {
                let tmp = array[j]
                array[j] = array[j + 1]
                array[j + 1] = tmp
            }
            count+=1
        }
    }
    return array
}


console.log(bubbleSort(arr))
console.log('count - ', count)