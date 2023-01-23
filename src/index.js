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
  // let dot = /10/g
  // let dash = /11/g
  // let space =  /[*]{10}/g

  // expr
  // // .replace(dot,'.')
  // .replace(dash, '-')
  // // .replace(space, ' ')
  // console.log('expr',expr)
  // return expr

  let code = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010"
let dot = /10/g
let dash = /11/g
let space =  /[*]{10}/g

let toMorse = code
  .replace(dash, '-')
  .replace(dot, '.')
  // .replace(space, ' ')
  // .replace(/0/g,' ')

let str = []
console.log('toMorse',toMorse)
let arrs = toMorse.split(' ')
// .map(i => i.split('**********'))
.flat().map(i => i.split('0'))
.flat().map(i => i.length > 5 ? i.split('**********') : i)

// .map(i => i.split('0'))
// let morseLetters = arrs.flat().map(i => i.split('0'))
let morseLetters = []
//= arrs.filter(i => i !== '').map(i => i.length > 1)
for (let i = 0;i < arrs.length;i++){
  if(arrs[i] !== ''){
    console.log('arrs[i]',arrs[i])
    console.log('MORSE_TABLE[arrs[i]]',MORSE_TABLE[arrs[i]])
    if(Array.isArray(arrs[i])){
      morseLetters.push(MORSE_TABLE[arrs[i][0]]) 
      morseLetters.push('space')
    }else{
      morseLetters.push(MORSE_TABLE[arrs[i]]) 
    }
  }
}
// console.log('arrs',arrs)
// console.log('arrs[0]',arrs[0])
// console.log('morseLetters',morseLetters.join('').replace('space',' '))

return morseLetters.join('').replace('space',' ')
}

module.exports = {
    decode
}