const fs = require("fs/promises");
const path = require("path");

const myPath = path.join(__dirname, "files");

async function copyDir() {

    await fs.mkdir(path.join(__dirname, "files-copy"), {recursive:true});

    const data = await fs.readdir(myPath);


    data.forEach(async (file) => {
        const sourceFile = path.join(__dirname, "files", file);
        const newFile = path.join(__dirname, "files-copy", file);

        await fs.copyFile(sourceFile, newFile)
        .catch(function(err) {
            console.log(err);
        })

    });
}

copyDir();