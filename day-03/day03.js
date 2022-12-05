import fs from "fs";
import readline from "readline";
// part one and two
const readFile = () => {
  const readStream = fs.createReadStream("./day03.txt", "utf8");
  const lineRead = readline.createInterface({ input: readStream });
  return lineRead;
};

const lookUpTable = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26,
                     A:27,B:28,C:29,D:30,E:31,F:32,G:33,H:34,I:35,J:36,K:37,L:38,M:39,N:40,O:41,P:42,Q:43,R:44,S:45,T:46,U:47,V:48,W:49,X:50,Y:51,Z:52,};
let finalString = '';
const partOne = ()=>{
    const lineRead = readFile();
    lineRead.on('line',(data)=>{
        let string = '';
        const length = data.trim().length;
        const halfLength = length / 2;
        const firstPart = data.substring(0,halfLength);
        const secondPart = data.substring(halfLength);
        for(let i = 0;i<firstPart.length;i++){
            if(secondPart.includes(firstPart[i])&& !string.includes(firstPart[i])){
                string = string+firstPart[i];
            }
        }
        finalString = finalString+string;
    });
    lineRead.on('close',()=>{
        let sum = 0;
        for(let i = 0;i<finalString.length;i++){
            sum =sum+lookUpTable[finalString[i]];
        }
        console.log(sum,finalString);
    })
}
partOne();
const keys = Object.keys(lookUpTable);
const returnMatchedCharacter = (array=[])=>{
    for(let i =0;i<keys.length;i++){
        const found = array[0].includes(keys[i])&&array[1].includes(keys[i])&&array[2].includes(keys[i])
        if(found) {return keys[i];} 
    }
}
const partTwo = ()=>{
const lineRead =  readFile();
let count =0;
const array=[];
let finalString = ''
 lineRead.on('line',(data)=>{
    if(count===2){
        array[count] = data;
        const char = returnMatchedCharacter(array);
        finalString =finalString+char;
        count = 0;
    }else{
        array[count] =data;
        count++;
    }
 });
 lineRead.on('close',()=>{
    let sum = 0;
    for(let i = 0;i<finalString.length;i++){
        sum =sum+lookUpTable[finalString[i]];
    }
    console.log(sum,finalString);
 });    
}

partTwo();