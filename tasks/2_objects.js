/*
    Функция принимает два обьекта с разными ключами некоторые из которых могут пересекаться.
    Необходимо вернуть первый обьект с обновленными значениями из второго обьекта(только те которые совпадают)

    example:
    obj1 = {
        foo: 'foo',
        bar: 'bar',
    }

    obj2 = {
        bar: 'foo',
        some: 'some',
    }

    result = {
        foo: 'foo',
        bar: 'foo',
 */

// // variant 1
// const mergeSameKeysOfObjects = (obj1, obj2) => {
//     let keysOfOnj1 = Object.keys(obj1)
//     let keysOfOnj2 = Object.keys(obj2)
//     for (let i = 0; i < keysOfOnj1.length; i++) {
//         let key1 = keysOfOnj1[i]
//         for (let j = 0; j < keysOfOnj2.length; j++) {
//             let key2 = keysOfOnj2[j]
//             if (key1 === key2) {
//                 obj1[key1] = obj2[key2]
//             }
//         }
//     }
//     console.log(obj1)
// }


// variant 2
const mergeSameKeysOfObjects = (obj1, obj2) => {
    for (const key in obj1) {
        if (obj2.hasOwnProperty(key)) {
            obj1[key] = obj2[key]
        }
    }
    console.log(obj1)
}

mergeSameKeysOfObjects(
    { foo: 'foo', bar: 'bar'},
    { bar: 'foo', some: 'some'},
)
