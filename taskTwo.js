function reverseString(string) { 
    return string.split('').reverse().join('');
}

console.log(reverseString('vahan'));

module.exports = reverseString;