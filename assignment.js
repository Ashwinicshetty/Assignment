/* Given a string s and a number x, print the shortest substrings which start and end with the same character and have lengths greater than or equal to x.If multiple substrings 
exist with the same shortest length, print them all.*/

function shortSubstring(s, x) {
  const result = [];

  for (let i = 0; i < s.length; i++) {
    for (let j = i + x - 1; j < s.length; j++) {
      if (s[i] === s[j] && j - i + 1 >= x) {
        result.push(s.slice(i, j + 1));
      }
    }
  }
  const minLength = Math.min(...result.map((substring) => substring.length));
  const shortestSubstrings = result.filter(
    (substring) => substring.length === minLength
  );
  return shortestSubstrings;
}

/* Given a string s, find the ASCII value of each character iteratively. If the ASCII value is even, increment the next character by (ASCII_value % 7). If the ascii value is odd, decrement the previous character by (ASCII_value % 5). Output the newly formed string. 
Note:
If a character has already been changed once, do not change that character again. 
If the new number is an invalid ASCII value, replace it with 83. 
*/
function modifyString(s) {
  const charArray = s.split("");

  for (let i = 0; i < charArray.length; i++) {
    const asciiValue = charArray[i].charCodeAt(0);

    if (asciiValue % 2 === 0 && i < charArray.length - 1) {
      charArray[i + 1] = String.fromCharCode(
        charArray[i + 1].charCodeAt(0) + (asciiValue % 7)
      );
    } else if (asciiValue % 2 !== 0 && i > 0) {
      charArray[i - 1] = String.fromCharCode(
        charArray[i - 1].charCodeAt(0) - (asciiValue % 5)
      );
    }
    if (charArray[i].charCodeAt(0) < 0 || charArray[i].charCodeAt(0) > 127) {
      charArray[i] = String.fromCharCode(83);
    }
  }

  return charArray.join("");
}
