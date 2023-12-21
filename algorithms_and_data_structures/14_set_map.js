const map = new Map()
const objKey = { id: 1 }
map.set('textKey', 'Lorem ipsum 1')
map.set(objKey, 'Lorem ipsum 2')

console.log(map.get('textKey'))
console.log(map.get(objKey))

// ----------------------------------

const set = new Set()

set.add(5)
set.add(5)
set.add(5)
set.add(4)
set.add(4)
set.add(3)
set.add(2)
set.add(1)

console.log(set.size)

