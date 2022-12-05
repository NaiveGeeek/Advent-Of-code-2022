import fs from "fs";
import readline from "readline";
// part one and two
const readFile = () => {
  const readStream = fs.createReadStream("./day04.txt", "utf8");
  const lineRead = readline.createInterface({ input: readStream });
  return lineRead;
};
const findOneRangeContainsOther = (min1,min2,max1,max2)=>{
  return ((min2-0)>=(min1-0)&&(max2-0)<=(max1-0)) || ((min1-0)>=(min2-0)&&(max1-0)<=(max2-0));
}

const findOneRangeOverlapOther = (min1,min2,max1,max2)=>{
return ((min2-0)<=(min1-0)&&(max2-0)>=(min1-0)) || ((min1-0)<=(min2-0)&&(max1-0)>=(min2-0));
}
const solution = ()=>{
    const lineRead = readFile();
    let count =0;
    let overlapCount = 0; 
    lineRead.on('line',(data)=>{
      const[partOne,partTwo] = data.trim().split(',');
      const[min1,max1] = partOne.split('-');
      const[min2,max2] = partTwo.split('-');
      const result = findOneRangeContainsOther(min1,min2,max1,max2);
      const overlapResult = findOneRangeOverlapOther(min1,min2,max1,max2);
      if(result)count++;
      if(overlapResult) overlapCount++;
    });
    lineRead.on('close',()=>{console.log(count,overlapCount)});
}

solution();