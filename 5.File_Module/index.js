const fs=require('fs');

// fs.readFile("input.txt",function(err,data){
//     if(err){
//         throw new Error ('Reading cant possible');
//     }
//     console.log("Asynchronous Read:-" + data.toString());
    
// })

// ?...................................................synchronous read ...................................................
// const data = fs.readFileSync('input.txt');
// console.log("Synchronous read: " + data.toString());




// ?............................................opening the files...........................................
console.log("opening file!");
fs.open("input.txt", "r+", function (err, fd) {
    if (err) {
        return console.error(err);
    }
    console.log("File open successfully");

    //! file oopen jha hoti hai usi scope m bnd bhi honi chahiye 
// .............................closing the file..............................
    fs.close(fd, function (err) {
        if (err) {
            console.log(err);
        }
        console.log("File closed successfully.");
    });
});

// ?..............................................writing into the files........................................
console.log("writing into existing file");
fs.writeFile("input.txt", "Yash Loves Coding", function (err) {
    if (err) {
        return console.error(err);
    }

    console.log("Data written successfully!");
    console.log("Let's read newly written data");

    fs.readFile("input.txt", function (err, data) {
        if (err) {
            return console.error(err);
        }
        console.log("Asynchronous read: " + data.toString());
    });
});



// ?........................................Appending into the file.............................................
let data = "\nLearn Node.js";

// Append data to file
fs.appendFile(
    "input.txt", data, "utf8",
    // Callback function
    function (err) {
        if (err) throw err;

        // If no error
        console.log("Data is appended to file successfully.");
    }
);


