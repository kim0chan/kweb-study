const fs = require('fs');
const util = require('util');
const path = require('path');

const getDirList = util.promisify(fs.readdir);
const getFileStat = util.promisify(fs.stat);

const PATH = './test';


const searchDir = async dir => {
    const files = await getDirList(dir);
    files.forEach(async file => {
        const filePath = path.join(dir, file);
        const stat = await getFileStat(filePath);
        if (stat.isDirectory(s)) await search(filePath);
        else if (path.extname(filePath) === '.js') {console.log(filePath);}
    });
};

(async () => {
    try {
        await searchDirectory(PATH);
    } catch (err) {
        console.error(err);
    }
})();
