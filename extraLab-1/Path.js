const path=require('path')
let normal=path.normalize("E:/study work/Sem 6")
console.log(normal)

let join = path.join('E:', 'study work', 'p2.html');
console.log(join)

let basename=path.basename('E:/study work/Sem 6/p2.html')
console.log(basename)

let dirName=path.dirname('E:/study work/Sem 6')
console.log(dirName)

let extName=path.extname('E:/study work/Sem 6/p2.html')
console.log(extName);

// path.dirname(p) → Returns the directory name of the path.
// path.basename(p) → Returns the last portion of a path (filename).
// path.extname(p) → Returns the file extension of a path.
// path.join([...paths]) → Joins multiple path segments into one.
// path.resolve([...paths]) → Resolves a sequence of paths into an absolute path.
// path.parse(p) → Parses a path into an object with root, dir, base, ext, and name.
// path.format(obj) → Formats a parsed object back into a string.
// path.normalize(p) → Normalizes a path, resolving .. and . segments.