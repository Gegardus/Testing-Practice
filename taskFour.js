function capitalize(string) {

   return string.replace(string.charAt(0), string.charAt(0).toUpperCase());
    
}

console.log(capitalize('vahan'));

module.exports = capitalize;