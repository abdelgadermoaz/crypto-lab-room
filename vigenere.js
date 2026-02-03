function vigenereEncrypt(plaintext, keyword) {
    let result = '';
    let keyIndex = 0;
    
    // Clean input
    plaintext = plaintext.toUpperCase().replace(/[^A-Z]/g, '');
    keyword = keyword.toUpperCase();

    for (let i = 0; i < plaintext.length; i++) {
        let plainPos = plaintext.charCodeAt(i) - 65; // A=0, B=1...
        let keyPos = keyword.charCodeAt(keyIndex % keyword.length) - 65;

        // TODO: Calculate (plainPos + keyPos) % 26
        let newPos = (plainPos + keyPos) % 26;
        
        // TODO: Convert to character and add to result
        result += String.fromCharCode(newPos + 65);

        keyIndex++;
    }
    return result;
}

console.log(vigenereEncrypt("ATTACK", "LEMON")); // Expect: LXFOPV