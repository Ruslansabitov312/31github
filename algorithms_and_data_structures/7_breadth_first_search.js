// Поиск в ширину

const graph = {}
graph.a = ['b', 'c']
graph.b = ['f']
graph.c = ['d', 'e']
graph.d = ['f']
graph.e = ['f']
graph.f = ['g']

function breadthSearch(graph, start, end) {
    let queue = []
    queue.push(start) // queue = ['a']

    while (queue.length > 0) { // true
        const current = queue.shift() // current = 'a' (queue = [])

        if(!graph[current]) { // false - (graph[current] = ['b', 'c'])
            graph[current] = []
        }

        if(graph[current].includes(end)) { // false - ( ['b', 'c'].includes('g') )
            return true
        } else {
            queue = [...queue, ...graph[current]] // [...[], ...['b', 'c']]
        }
    }
    return false
}

console.log(breadthSearch(graph, 'a', 'g'))