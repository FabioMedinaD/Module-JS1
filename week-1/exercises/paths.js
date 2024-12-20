// The diagram below shows the different names for parts of a file path on a Unix operating system

// ┌─────────────────────┬────────────┐
// │          dir        │    base    │
// ├──────┬              ├──────┬─────┤
// │ root │              │ name │ ext │
// "  /    home/user/dir / file  .txt "
// └──────┴──────────────┴──────┴─────┘

// (All spaces in the "" line should be ignored. They are purely for formatting.)

const filePath = "/Users/mitch/cyf/Module-JS1/week-1/interpret/file.txt";
const lastSlashIndex = filePath.lastIndexOf("/");
const lastPeriodIndex = filePath.lastIndexOf(".")
const base = filePath.slice(lastSlashIndex + 1);
const dir  = filePath.slice(0,lastSlashIndex + 1);
const ext  = filePath.slice(lastPeriodIndex);
console.log(`The base part of ${filePath} is ${base}`);
console.log(`The dir part of ${filePath} is ${dir}`);
console.log(`The ext part of ${filePath} is ${ext}`);

// Create a variable to store the dir part of the filePath variable
// Create a variable to store the ext part of the variable
