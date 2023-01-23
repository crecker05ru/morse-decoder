const MORSE_TABLE = {
  ".-": "a",
  "-...": "b",
  "-.-.": "c",
  "-..": "d",
  ".": "e",
  "..-.": "f",
  "--.": "g",
  "....": "h",
  "..": "i",
  ".---": "j",
  "-.-": "k",
  ".-..": "l",
  "--": "m",
  "-.": "n",
  "---": "o",
  ".--.": "p",
  "--.-": "q",
  ".-.": "r",
  "...": "s",
  "-": "t",
  "..-": "u",
  "...-": "v",
  ".--": "w",
  "-..-": "x",
  "-.--": "y",
  "--..": "z",
  ".----": "1",
  "..---": "2",
  "...--": "3",
  "....-": "4",
  ".....": "5",
  "-....": "6",
  "--...": "7",
  "---..": "8",
  "----.": "9",
  "-----": "0",
}

function decode(expr) {
  let dot = /10/g
  let dash = /11/g
  let space = /[*]{10}/g
  let start = 0
  let end = 10
  let arr = []
  
  while (end <= expr.length) {
    arr.push(
      expr
        .slice(start, end)
        .replace(dash, "-")
        .replace(dot, ".")
        .replace(space, " ")
        .replace(/0/g, "")
    )
    start = end
    end += 10
  }

  let encoded = []
  for (let index = 0; index < arr.length; index++) {
    if (MORSE_TABLE[arr[index]] !== undefined) {
      encoded.push(MORSE_TABLE[arr[index]])
    }
    if (arr[index] === " ") {
      encoded.push(arr[index])
    }
  }

  return encoded.join("")
}

module.exports = {
  decode,
}
