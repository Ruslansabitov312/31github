/*
    Реализовать функцию которая принимает два параметра:
    - массив значений
    - колбек по резултату которого будут группироваться значения

    Функция должна возвращать совокупный обьект где ключи это названия групп, а значения сами группы

    example:
    arr: [ 6.1, 4.2, 6.3]
    callbackFunction = Math.Floor
    result = {
        '4': [4.2],
        '6': [6.1, 6.3]
 */


function groupBy(arr, callbackFunction) {
    const result = {}
    arr.forEach(item => {
        let resultAfterCallback = callbackFunction(item)
        result[resultAfterCallback]
            ? result[resultAfterCallback].push(item)
            : result[resultAfterCallback] = [item]
    })
    console.log(result)

}

groupBy([6.1, 4.2, 6.3], Math.ceil)