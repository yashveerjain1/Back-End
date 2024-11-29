const lodash=require('lodash')

const names=['yash','john','arpit'];
const capitalize=lodash.map(names,lodash.capitalize);
console.log(capitalize);
