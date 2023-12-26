const f = throttle(console.log, 1000)
f(1)
f(2)
f(3)
setTimeout(() => f(4), 100)
setTimeout(() => f(5), 500)
setTimeout(() => f(6), 1001)

function throttle(callback, delay) {
    let isWaiting = false

    return (...args) => {
        if (!isWaiting) {
            callback(...args)
            isWaiting = true;

            setTimeout(() => {
                isWaiting = false;
            }, delay);
        }
    }
}