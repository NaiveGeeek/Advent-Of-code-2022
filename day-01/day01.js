import fs from "fs";
import readline from "readline";
// part one and two
const readFile = () => {
  const readStream = fs.createReadStream("./day01.txt", "utf8");
  const lineRead = readline.createInterface({ input: readStream });
  return lineRead;
};
let maximumEnergy = 0;
let currentElfEnergy = 0;
let topThree = [0,0,0];

const insertTopThree = (energy)=>{
 let maxEnergy = energy;
 for(let i =0;i<topThree.length;i++){
    if(topThree[i]<energy){
        [maxEnergy,topThree[i]] = [topThree[i],maxEnergy];
    }
 }
  
}

const calculateMaximumEnergy = () => {
  const lineRead = readFile();
  lineRead.on("line", (line) => {
    if (line.trim()) {
      currentElfEnergy += Number(line.trim());
    } else {
      maximumEnergy =
        maximumEnergy >= currentElfEnergy ? maximumEnergy : currentElfEnergy;
        insertTopThree(currentElfEnergy);
      currentElfEnergy = 0;
    }
  });
  lineRead.on("close", () => {
    maximumEnergy =
      maximumEnergy >= currentElfEnergy ? maximumEnergy : currentElfEnergy;
    insertTopThree(currentElfEnergy);
    currentElfEnergy =0;
    const sumOfTopThree = topThree.reduce((acc,cur)=>acc+cur,0);
    console.log(maximumEnergy,sumOfTopThree);
  });
};
calculateMaximumEnergy();


