function getRandomInt(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomString(length: number) {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}

function countCharacters(input:string) {
  let count = 0;
  for (let index = 0; index < input.length; index++) {
     let char = input[index]
     if( char.charCodeAt(0) >= 32 && char.charCodeAt(0) <= 127 ) {
      count += 1
     } else {
      count += 1
     }
  }
  return count
}

export { getRandomInt, getRandomString, countCharacters };
