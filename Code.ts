import { readFileSync, realpathSync } from 'fs';
import { join } from 'path';

// patron A, find any The word case incentive with pure code. including those under anothe world. 
function searchWithPureCode (filename:string){
    console.time('time')
    try{
        let cnt = 0;
        let result = readFileSync(join(__dirname,filename),'utf-8').toLowerCase()
        for(let i = 0; i < result.length; i++){
            if(result.slice(i,i+3) == 'the'){
                cnt++
            }
        }
        console.timeEnd('time')
        return cnt 
        
    } catch (e){
        console.log(e)
    }
    
}


console.log(searchWithPureCode("./full_speech.txt"))

console.time('time')
function searchOnlyTheWithCode(filename:string){
   try{
       let result = readFileSync(join(__dirname,filename),'utf-8')
       return  result.toLowerCase().split(" ").filter(v => v == 'the').length
       
    } catch (e) {
        console.log(e)
    }
    
}

console.log(searchOnlyTheWithCode("./full_speech.txt"))
console.timeEnd('time')