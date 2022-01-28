# SubsCipher

## A mono-alphabetic substitution cipher

This method of substitution replaces the 26 letters of the alphabet with 26 letters from the key (one letter matches only one other).

The app will preserve case and any non-alphabet character as it is.

Example:

__Plaintext character__: a b c d e f g h i j k l m n o p q r s t u v w x y z

__Key character__: X F Q G A W Z S E D C V B N M L K J H G T Y U I O P

```js
console.log(subscipher("Hello, World!")); // Output: "Savvm, Umjvg!"
```