const MORSE_TABLE = {
    '.-':     'a',
    '-...':   'b',
    '-.-.':   'c',
    '-..':    'd',
    '.':      'e',
    '..-.':   'f',
    '--.':    'g',
    '....':   'h',
    '..':     'i',
    '.---':   'j',
    '-.-':    'k',
    '.-..':   'l',
    '--':     'm',
    '-.':     'n',
    '---':    'o',
    '.--.':   'p',
    '--.-':   'q',
    '.-.':    'r',
    '...':    's',
    '-':      't',
    '..-':    'u',
    '...-':   'v',
    '.--':    'w',
    '-..-':   'x',
    '-.--':   'y',
    '--..':   'z',
    '.----':  '1',
    '..---':  '2',
    '...--':  '3',
    '....-':  '4',
    '.....':  '5',
    '-....':  '6',
    '--...':  '7',
    '---..':  '8',
    '----.':  '9',
    '-----':  '0',
};

function decode(expr) {
    let arr = [];
    for(let i=0; i<=(expr.length/10); i++){
      arr.push(expr.slice(10*i, (i+1)*10))  
    }
    result='';
    for(let j=0; j<arr.length-1; j++){
        if(arr[j]==='**********'){
            result += ' ';
            continue;
        }
        let str = '';
        for(let k=0; k<=arr[j].length; k +=2){
            switch(arr[j].slice(k, k+2)){
                case "10" : str += "."; break;
                case "11" : str += "-"; break; 
                default: break;  
            }
        }
        result += MORSE_TABLE[str];
    }
    return result;
}


module.exports = {
    decode
}