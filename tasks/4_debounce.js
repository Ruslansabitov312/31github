const f = debounce(console.log, 1000)
f(1)
f(2)
f(3)
f(4)
f(5)
f(6)
// setTimeout(() => f(3), 100)
// setTimeout(() => f(4), 500)
// setTimeout(() => f(5), 1600)


function debounce(callback, delay) {
    let timer;
    return function(...args) {
        clearTimeout(timer)
        timer = setTimeout(() => {
            callback.apply(this, args)
        }, delay)
    }
}
