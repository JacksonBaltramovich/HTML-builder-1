const path = require('path');
const fs = require("fs");

const myPath = path.join(__dirname, "secret-folder");


fs.readdir(myPath, {withFileTypes:true} , (err, data) => {
    if(err) console.log(err);
    else {
        
        data.forEach((file) => {
            if(file.isFile()) {
                const name = file.name.split(".")[0];
                const ext = path.extname(file.name).split('.').join("");
                const indexPath = path.join(__dirname, "secret-folder", file.name);

                fs.stat(indexPath, (err, stats) => {

                    const size = stats.size;
                    console.log(name + ' - ' + ext + ' - ' + size + 'b');

                })
            }
        });
    }
})