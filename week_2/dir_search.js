const util = require('util');
const fs = require('fs');
const path = require('path');

const readDir = util.promisify(fs.readdir);
const getStat = util.promisify(fs.stat);


const searchDir = async dir => {
    const dirList = await readDir(dir);
    //console.log(dirList);
    dirList.forEach(async elem => {
        const subPath = path.join(dir, elem);
        //console.log(`subPath = ${subPath}`);
        const stat = await getStat(subPath);

        if(stat.isDirectory()) {await searchDir(subPath);}
        else if(path.extname(subPath) === '.js') {console.log(subPath);}
    });
        

}

(async() => {
    try 
    {
        await searchDir('./test');
    } catch (err) {
        console.error(err);
    }
})();
