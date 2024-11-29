const { log } = require('console');
const path=require('path');
const { json } = require('stream/consumers');

// console.log('Directory Name: ',path.dirname(__filename));
// console.log('FIle Name: ',path.basename(__filename));

// console.log('File Extension',path.extname(__filename));


// console.log("Path formatted ",path.format({
//     dir:__dirname,
//     root:__filename,
    
// }));


console.log(path.basename('/home///user/bash/index.txt','.txt'));
console.log(path.isAbsolute('users/tree//main.js'));

console.log(path.join('/home///user/bash/index.txt','/user/main/hello.txt'));
console.log(path.normalize('/home///user/bash/index.txt','.txt'));
console.log(path.parse(__filename));

console.log(path.relative('/home///user/bash/index.txt','.txt'));

