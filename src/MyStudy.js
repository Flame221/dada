const average = (...args) => args.reduce((accum, arg) => accum+=arg, 0)/args.length

let arr1 = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,1,2,3,4,5,6,7,8,9,10,11,]
let set1 = new Set(arr1)
arr1 = set1.values()
console.log(set1)
console.log(arr1)