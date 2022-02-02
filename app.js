const info = document.getElementById('info');
const form = document.getElementById('form');
const clear = document.getElementById('clear');
const mode = document.getElementById('mode');

// Simple How-to for user through #info textarea
showHowTo();

form.addEventListener('submit', (event) => {
  event.preventDefault();
  
  // get key and plain text
  let key = document.getElementById('key').value;
  const text = document.getElementById('text').value;

  // validate key
  if (!isValidKey(key)) {
    info.value = 
    `Key is not valid.
1. Key must contain exactly 26 letters
2. Key must only contain alphabetic character (a-Z)`;
    
    return;
  }

  // convert key to lower case
  key = key.toLowerCase();

  if (mode.textContent === 'Encrypt') {
    // encrypt text
    const encryptedText = subsCipher(text, key);
    info.value = encryptedText;
  } else if (mode.textContent === 'Decrypt') {
    // decrypt text
    const decryptedText = subsDecode(text, key);
    info.value = decryptedText;
  } else {
    info.value = "Error! Please refresh the page";
  }
})

// clear all input fields
clear.addEventListener('click', () => {
  document.getElementById('key').value = "";
  document.getElementById('text').value = "";
  showHowTo();
})

const isValidKey = (key) => {
  // key must contain exactly 26 letters
  // key must only contain alphabetic character
  return (/[a-zA-Z]{26}/).test(key);
}

const subsCipher = (s, key) => {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let newString = "";

  // loop through the whole string
  for (let i = 0; i < s.length; i++) {
    // put to newString immediately if not alphabetic
    if (!/[a-zA-Z]/.test(s[i])) {
      newString += s[i];
      continue;
    }

    // preserve case
    const isUpperCase = /[A-Z]/.test(s[i]);

    // get index of the letter (a = 0, b = 1, ...,  z = 25)
    const subIndex = alphabet.indexOf(s[i].toLowerCase())

    // get the replacement for the letter from key
    let sub = key[subIndex];

    // convert the letter back to it's original case
    if (isUpperCase) {
      sub = sub.toUpperCase();
    }

    // put the letter into newString
    newString += sub;
  }

  return newString;
}

const subsDecode = (s, key) => {
  const alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let newString = "";

  // loop through the whole string
  for (let i = 0; i < s.length; i++) {
    // put to newString immediately if not alphabetic
    if (!/[a-zA-Z]/.test(s[i])) {
      newString += s[i];
      continue;
    }

    // preserve case
    const isUpperCase = /[A-Z]/.test(s[i]);

    // get index (in alphabet) of the encrypted letter from the key
    const subIndex = key.indexOf(s[i].toLowerCase())

    // replace with letter of the same index in alphabet
    let sub = alphabet[subIndex];

    // convert the letter back to it's original case
    if (isUpperCase) {
      sub = sub.toUpperCase();
    }

    // put the letter into newString
    newString += sub;
  }
  
  return newString;
}

function showHowTo() {
  info.value = "Typed in a 26-character key, then insert the text you want to encrypt followed by the submit button!"
}