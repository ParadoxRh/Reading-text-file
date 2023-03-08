import { readFileSync, realpathSync, stat } from 'fs';
import { join } from 'path';
//DFA created to find any THE coincidence. 
function dfaTest(filename:string){
    console.time('time')
    let file = readFileSync(join(__dirname,filename),'utf-8');
    let cnt = 0
    let state = 'q0'
    for(let i = 0; i < file.length; i++){
        switch(state){
            case 'q0':
                if(file[i] == "t" || file[i] =="T"){
                    state = 'q1'
                }
                    break;
            case 'q1':
                if(file[i] == 'h' || file[i] == 'H'){
                    state = 'q2'
                } else if (file[i] == 't' || file[i] == 'T'){
                     break;
                } else {
                    state = 'q0'
                }
                break;
            case 'q2':
                if(file[i]== 'e' || file[i] == 'E'){
                    cnt++
                }  else if(file[i] == 't' || file[i] == 'T'){
                    state ='q0'
                } else if(file[i] == 'h' || file[i] == 'H'){
                    state = 'q0'
                } else {
                    state = 'q0'
                }
                break;

            default: 
             state = 'q0'
             break; 

        }

    }
    console.timeEnd('time')
    return cnt
}
console.log(dfaTest('./full_speech.txt'))