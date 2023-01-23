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
//let code = "00101010100000000010001011101000101110100000111111**********00001011110000111111000010111000101110100000111010";
let code = "000000101100000011100000101010000010111100000000100000101110**********00001111110000001110**********000000001100101010100000000010**********00001010110010111010000000001100000010100000001111000000101100000000110000000010**********00111110110000101011000000001000001010100000000011000000101000001111110000001110**********00001111110010101110**********0010111010000000101000101011100000000010**********000000001100101010100000000010**********00001010110000001110000000101000101010110000000010000010111000001010100000000010**********000000101100000011100000111010**********0000000010001010101100000000100000101110001110111100000000110010101010000000101000000011100000111110**********00000010100000101010**********10101010111010111111";
//let code = "00000000100000111010101010111100111011100000001011111110101011111010101010101010"
let dot = /10/g
let dash = /11/g
let space =  /[*]{10}/g
let start = 0
let end = 10
let arr = []
while(end <= code.length){
  arr.push(code.slice(start,end).replace(dash, '-').replace(dot, '.').replace(space, ' ').replace(/0/g,''))
  start = end
  end += 10
}

let encoded = []
for(let index = 0;index < arr.length;index++){
  if(MORSE_TABLE[arr[index]] !== undefined){
    encoded.push(MORSE_TABLE[arr[index]])
  }
  if(arr[index] === ' '){
    encoded.push(arr[index])
  }
}
console.log('arr',arr)
console.log('encoded',encoded.join(''))
// let toMorse = code
//   .replace(dash, '-')
//   .replace(dot, '.')
//   // .replace(space, ' ')
//   // .replace(/0/g,' ')

// let str = []
// console.log('toMorse',toMorse)
// let arrs = toMorse.split(' ')
// // .map(i => i.split('**********'))
// .flat().map(i => i.split('0'))
// .flat().map(i => i.length > 5 ? i.split('**********') : i)

// console.log('arrs',arrs)
// // .map(i => i.split('0'))
// // let morseLetters = arrs.flat().map(i => i.split('0'))
// let morseLetters = []
// //= arrs.filter(i => i !== '').map(i => i.length > 1)
// for (let i = 0;i < arrs.length;i++){
//   if(arrs[i] !== ''){
//     console.log('arrs[i]',arrs[i])
//     console.log('MORSE_TABLE[arrs[i]]',MORSE_TABLE[arrs[i]])
//     if(Array.isArray(arrs[i])){
//       morseLetters.push(MORSE_TABLE[arrs[i][0]]) 
//       morseLetters.push('space')
//     }else{
//       morseLetters.push(MORSE_TABLE[arrs[i]]) 
//     }
//   }
// }
// console.log('arrs',arrs)
// console.log('arrs[0]',arrs[0])
// console.log('morseLetters',morseLetters.join('').replace(/space/g,' '))
//   toMorse.split('0').forEach(letter => {
//     console.log("letter",letter)
//     if(MORSE_TABLE[letter] !== undefined)
//       str.push(MORSE_TABLE[letter])
//   })

// console.log("arrs.join(' ')",arrs.join(' '))

// arrs.forEach(arr => {
//   arr.forEach(letter => {
//         if(MORSE_TABLE[letter] !== undefined)
//       str.push(MORSE_TABLE[letter])
//   })
// })
// console.log("toMorse",toMorse)
// console.log("toMorse.split('')",toMorse.split('0'))
// console.log("str",str)
// console.log("MORSE_TABLE['....']",MORSE_TABLE['....'])
