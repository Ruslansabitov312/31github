let merge = function (intervals) {
    if (intervals.length == 0) return [];
    if (intervals.length == 1) return intervals;

    intervals.sort((a, b) => {
        return a[0] - b[0];
    });

    let result = [intervals[0]];

    for (let interval of intervals) {
        let recentInterval = result[result.length - 1];
        if (recentInterval[1] >= interval[0]) {
            recentInterval[1] = Math.max(recentInterval[1], interval[1]);
        } else {
            result.push(interval);
        }
    }
    return result;
};


const myArray = [[1, 3], [2, 6], [8, 10], [15, 18]];
console.log(merge(myArray));

