import fs from "fs";
import readline from "readline";
// part one and two
const readFile = () => {
  const readStream = fs.createReadStream("./day02.txt", "utf8");
  const lineRead = readline.createInterface({ input: readStream });
  return lineRead;
};

const lookUpTable = {
    AX:[1,3],
    AY:[2,6],
    AZ:[3,0],
    BX:[1,0],
    BY:[2,3],
    BZ:[3,6],
    CX:[1,6],
    CY:[2,0],
    CZ:[3,3]
}

let totalSum = 0;
const calculateResult = ()=>{
    const lineRead = readFile();
    lineRead.on('line',(data)=>{
      const [one,two] = data.trim().split(' ');
      const [a,b] =  lookUpTable[`${one}${two}`];
      totalSum = totalSum+a+b;
    });
    lineRead.on('close',()=>{console.log(totalSum)});
}
calculateResult();

// part Two 

const lookUpTableForPartTwo ={
    X:'loose',
    Y:'draw',
    Z:'win',
    loose:{A:3,B:1,C:2,score:0},
    draw:{A:1,B:2,C:3,score:3},
    win: {A:2,B:3,C:1,score:6}
}
let totalSumTwo =0;
const calculateResultPartTwo = ()=>{
    const lineRead = readFile();
    lineRead.on('line',(data)=>{
      const [one,two] = data.trim().split(' ');
      const label =  lookUpTableForPartTwo[two];
      const sum = lookUpTableForPartTwo[label][one] + lookUpTableForPartTwo[label]['score'];
      totalSumTwo = totalSumTwo+sum;
    });
    lineRead.on('close',()=>{console.log(totalSumTwo)});
}
calculateResultPartTwo();