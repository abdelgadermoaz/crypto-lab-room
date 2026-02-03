function caesarEncrypt(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        
        // Uppercase Logic
        if (char >= 'A' && char <= 'Z') {
            let position = char.charCodeAt(0) - 65;
            let newPosition = (position + shift) % 26;
            result += String.fromCharCode(newPosition + 65);
        }
        // TODO: Complete for lowercase letters (Exercise 2.1)
        else if (char >= 'a' && char <= 'z') {
            let position = char.charCodeAt(0) - 97;
            let newPosition = (position + shift) % 26;
            result += String.fromCharCode(newPosition + 97);
        }
        else {
            result += char; // Keep spaces/punctuation as is
        }
    }
    return result;
}

// Exercise 2.2: Decrypt Function
function caesarDecrypt(text, shift) {
    let result = '';
    for (let i = 0; i < text.length; i++) {
        let char = text[i];
        
        if (char >= 'A' && char <= 'Z') {
            let position = char.charCodeAt(0) - 65;
            // Subtract shift, add 26 to prevent negative numbers
            let newPosition = (position - shift + 26) % 26; 
            result += String.fromCharCode(newPosition + 65);
        }
        else if (char >= 'a' && char <= 'z') {
            let position = char.charCodeAt(0) - 97;
            let newPosition = (position - shift + 26) % 26;
            result += String.fromCharCode(newPosition + 97);
        }
        else {
            result += char;
        }
    }
    return result;
}

// Testing
console.log("Encrypted:", caesarEncrypt("Hello World", 3)); // Expect: Khoor Zruog
console.log("Decrypted:", caesarDecrypt("Khoor Zruog", 3)); // Expect: Hello World