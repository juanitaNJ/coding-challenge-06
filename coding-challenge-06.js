function hiddenWord(str) {

    let hiddenStr = "";

    for (let i = 0; i <str.length; i++) {
        if (str[i].match(/[a-z]/)) {
            hiddenStr += str[i];
        }
    }
    return hiddenStr;
}

console.log(hiddenWord("UcUNFYGaFYFYGtNUH"));
console.log(hiddenWord("bEEFGBuFBRrHgUHlNFYaYr"));
console.log(hiddenWord("YFemHUFBbezFBYzFBYLleGBYEFGBMENTment"));
console.log(hiddenWord("FGKSHMNGFwHSMJNFGoHJFGNweHMDFGNHJeSHNGH"));