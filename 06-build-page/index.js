const fsPromises = require('fs/promises');
const fs = require('fs');
const path = require('path');

const pathCss = path.join(__dirname, 'styles');
const pathHtml = path.join(__dirname, 'template.html');
const pathAssets = path.join(__dirname, 'assets');
const pathComponents = path.join(__dirname, 'components');
const pathCssBundle = path.join(__dirname, 'project-dist', 'style.css');
const pathAssetsBundle = path.join(__dirname, 'project-dist', 'assets');
const pathHtmlBundle = path.join(__dirname, 'project-dist', 'index.html');


const currentPath = path.join(__dirname, "styles");
const bundlePath = path.join(__dirname, "project-dist", "bundle.css");

let templateItem = {}
let fileHtml = '';


async function mergeStyles() {
    const data = await fsPromises.readdir(myPath);

    data.forEach(async (file) => {
        const sourcePath = path.join(__dirname, "styles", file);
        const stat = await fsPromises.stat(sourcePath);

        if(!stat.isDirectory()) {
            const ext = path.extname(file);

            if(ext === ".css") {
                fs.readFile(sourcePath, 'utf-8', (err, content) => {
                    if (err) throw err;


                    fs.appendFile(pathCssBundle, content, err => {
                        if(err) throw err;
                    })
                })
                
            }
        }
    })
}

mergeStyles();