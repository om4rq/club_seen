const id = [1, 2, 3]
let obj = [{
    name: "John"
}, {
    name: "Jane"
}, {
    name: "Doe"
, }]
let arr1 = ['bar', 'foo', 'foobar']
const result = obj.map((e, i) => ({
        id: id[i]
        , name: e.name
        , arr1: arr1[i]
    }))
console.log(result)
console.log()
