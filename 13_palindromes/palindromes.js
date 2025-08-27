function isAlphabet(ch) {
    return /^[a-zA-Z]$/.test(ch);
}

const palindromes = function (text) {
    text = text.toLowerCase()
    text = text.replace(/[^a-z0-9]/g, "");
    let [left, right] = [0, text.length-1]
    while(left < right){
        if(text[left] != text[right]){
            return false
        }
        left++
        right--
    }
    return true
}

// Do not edit below this line
module.exports = palindromes;
