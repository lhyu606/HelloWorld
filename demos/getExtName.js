const extname = (filename) => {
    let lastIdx = filename.lastIndexOf('.'); console.log(lastIdx);
    lastIdx = lastIdx == -1 ? filename.length : lastIdx == 0 ? filename.length : lastIdx;
    return filename.slice(lastIdx);

}

let filename = '.hello';//'ab.ce.jpg';
console.log(extname(filename));
console.log(extname('filename.file'));
console.log(extname('nam.ji.jpg'));