//Messiest code I've written
function rot13(str) {
    str = str.split('')
    
    const convertLetter = (letter) => {
      letter = letter.charCodeAt(0)
      if ('a'.charCodeAt(0) <= letter && 'z'.charCodeAt(0) >= letter)
        {
          letter += 13
          
          if (letter > 'z'.charCodeAt(0))
            {
              letter = letter -'z'.charCodeAt(0) + 'a'.charCodeAt(0) - 1
            }
        }
      else if ('A'.charCodeAt(0) <= letter && 'Z'.charCodeAt(0) >= letter)
        {
          letter += 13
          
          if (letter > 'Z'.charCodeAt(0))
            {
              letter = letter -'Z'.charCodeAt(0) + 'A'.charCodeAt(0) - 1
            }
        }
      return String.fromCharCode(letter)
    }
    
    
    for (let i = 0; i < str.length; i++){
      if (isNaN(Number(str[i])))
        {
          str[i] = convertLetter(str[i])
        }
    }
    return str.join('')
  }