import { readFileSync, realpathSync } from 'fs';
import { join } from 'path';




//solution con regEx all words case incentive Patron A, encontrar The aunque vaya incluido en otras palabras
function SearchAnyTheWithRegex (filename:string){
    try{
        let result = readFileSync(join(__dirname,filename),'utf-8')
        
        return [...result.toLowerCase().matchAll(/the/g)].length
    } catch (e){
        console.log(e)
    }
    
}

console.time('runingTIme')
console.log(SearchAnyTheWithRegex("./full_speech.txt"))
console.timeEnd('runingTIme') 


//regex patron B, encontrar solo las palabras THE pero sin estar mezcladas with regex. 

function searchTHewithRegex (filename:string){
    try{
        let result = readFileSync(join(__dirname,filename),'utf-8')
        return [...result.toLowerCase().split(/\s+/).filter(v => v == "the" )].length

    } catch (e){
        console.log(e)
    }
    
}

console.log(searchTHewithRegex("./full_speech.txt"))