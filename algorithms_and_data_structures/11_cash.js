function cashFunction(fn) {
    const cash = {}

    return function (n) {
        if (cash[n]) {
            console.log('Взято из кеша', cash[n])
            return cash[n]
        }

        let result = fn(n)
        console.log('Посчитала функция = ', result)
        cash[n] = result
        return  result
    }
}


function factorial(n) {
    let result = 1
    while(n != 1) {
        result *= n
        n -= 1
    }

    return result
}


const cashFactorial = cashFunction(factorial)
console.log(cashFactorial(5))
console.log(cashFactorial(4))
console.log(cashFactorial(3))
console.log(cashFactorial(4))
console.log(cashFactorial(5))
console.log(cashFactorial(1))
