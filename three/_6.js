// npm install git url
// npm uninstall colors
// npm install installs all dependencies
// can host your own npm (npmrc file)

//https://docs.npmjs.com/files/package.json
//https://www.npmjs.com/package/lodash


//COVERED BELOW:
// _.union([arrays])
// filter(collection, [predicate=_.identity])
// _.uniqWith(array, [comparator])
// intersectionBy([arrays], [iteratee=_.identity])
// sortedUniqBy(array, [iteratee])

const _ = require("lodash")

words = ['sky', 'wood', 'forest', 'falcon', 
    'pear', 'ocean', 'universe'];

let fel = _.first(words);
let lel = _.last(words);

console.log(`First element: ${fel}`);
console.log(`Last element: ${lel}`);

arr1=[1,2,3]
arr2=[4,5,6]

console.log(_.union(arr1,arr2))

var users = [
{ 'user': 'barney', 'age': 36, 'active': true },
{ 'user': 'fred',   'age': 40, 'active': false }
];

console.log(_.filter(users, function(o) { return !o.active; }));
// => objects for ['fred']
console.log(_.filter(users, function(o) { return o.active; }));
// The `_.matches` iteratee shorthand.
console.log(_.filter(users, { 'age': 36, 'active': true }));
// => objects for ['barney']

// The `_.matchesProperty` iteratee shorthand.
console.log(_.filter(users, ['active', false]));
// => objects for ['fred']

// The `_.property` iteratee shorthand.
console.log(_.filter(users, 'active'));
// => objects for ['barney']

var objects = [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 2 }];
 
console.log(_.uniqWith(objects, _.isEqual));


console.log(_.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor));
console.log(_.intersectionBy([{ 'x': 1 }], [{ 'x': 2 }, { 'x': 1 }], 'x'));

console.log(_.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor));