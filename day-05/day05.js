import fs from "fs";
import readline from "readline";
// part one and two
const readFile = () => {
  const readStream = fs.createReadStream("./day05.txt", "utf8");
  const lineRead = readline.createInterface({ input: readStream });
  return lineRead;
};

const arrayOfStack = [];

const partOne = () => {
  const lineRead = readFile();
  lineRead.on("line", (data) => {
    if (!data.includes("move")) {
      for(let val of data.matchAll(/[A-Z]/g)){
        const [position,value] = [val.index,val[0]];
        const index = Math.floor(position/4);
        arrayOfStack[index]= arrayOfStack[index]?[value,...arrayOfStack[index]]:[value];
      }  
    } else {
        const [move,from,to] = data.match(/\d+/g);
        const fromIndex = Number(from)-1;
        const toIndex = Number(to)-1;
        const count = move-0;
        const fromArrayLength = arrayOfStack[fromIndex].length;
        [arrayOfStack[fromIndex],arrayOfStack[toIndex]] = [arrayOfStack[fromIndex].slice(0,fromArrayLength-count),[...arrayOfStack[toIndex],...arrayOfStack[fromIndex].slice(fromArrayLength-count).reverse()]];
    }
  });
  lineRead.on('close',()=>{
    const finalString = arrayOfStack.reduce((acc,stack)=>{
        const index =stack.length-1;
        return acc+stack[index];
    },'');
    console.log(finalString);
});
};

partOne();

const arrayOfStackTwo = [];
const partTwo = ()=>{
    const lineRead = readFile();
    lineRead.on("line", (data) => {
      if (!data.includes("move")) {
        for(let val of data.matchAll(/[A-Z]/g)){
          const [position,value] = [val.index,val[0]];
          const index = Math.floor(position/4);
          arrayOfStackTwo[index]= arrayOfStackTwo[index]?[value,...arrayOfStackTwo[index]]:[value];
        }  
      } else {
          const [move,from,to] = data.match(/\d+/g);
          const fromIndex = Number(from)-1;
          const toIndex = Number(to)-1;
          const count = move-0;
          const fromArrayLength = arrayOfStackTwo[fromIndex].length;
          [arrayOfStackTwo[fromIndex],arrayOfStackTwo[toIndex]] = [arrayOfStackTwo[fromIndex].slice(0,fromArrayLength-count),[...arrayOfStackTwo[toIndex],...arrayOfStackTwo[fromIndex].slice(fromArrayLength-count)]];
      }
    });
    lineRead.on('close',()=>{
      const finalString = arrayOfStackTwo.reduce((acc,stack)=>{
          const index =stack.length-1;
          return acc+stack[index];
      },'');
      console.log(finalString);
  });
}
partTwo();