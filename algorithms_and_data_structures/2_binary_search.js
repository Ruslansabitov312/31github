const array = [1, 4, 5, 8, 2, 11, 71, 3, 22]
let count = 0
let recursiveBinarySearchCount = 0

function binarySearch(array, item) {
    let start = 0;
    let end = array.length;
    let middle;
    let found = false
    let position = -1

    while(found === false && start <= end) {
        count+=1
        middle = Math.floor((start + end) / 2 )
        if(array[middle] === item) {
            found = true
            position = middle
            return position
        }

        if(item < array[middle] ) {
            end = middle - 1
        } else {
            start = middle + 1
        }
    }

    return position
}


function recursiveBinarySearch(array, item, start, end) {
    let middle = Math.floor((start + end) / 2 )
    recursiveBinarySearchCount+=1

    if (item === array[middle]) {
        return middle
    }

    if (item < array[middle]) {
        return recursiveBinarySearch(array, item, start, middle - 1)
    } else {
        return recursiveBinarySearch(array, item, middle + 1, end)
    }
}


console.log(binarySearch(array, 22))
console.log('binarySearch count = ', count)

console.log(recursiveBinarySearch(array, 22, 0, array.length))
console.log('recursiveBinarySearch count = ', recursiveBinarySearchCount)

