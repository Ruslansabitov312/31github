function isPalindrome(str) {
    str = str.replace(/[^a-z0-9]/gi,"").toLowerCase();

    return str === str.split('').reverse().join('')
}


console.log(isPalindrome("A man, a plan, a canal: Panama"))
console.log(isPalindrome('civic'))
console.log( isPalindrome('race car'))