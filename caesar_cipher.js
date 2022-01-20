function rot13(str) {
    str.toUpperCase();
    let solved = '';
    for (i = 0; i < str.length; i++) {
        let asciiNumb = str[i].charCodeAt();
        if (asciiNumb >= 65 &&  asciiNumb <= 77 || asciiNumb >= 97 &&  asciiNumb <= 110) {
            solved += String.fromCharCode(asciiNumb + 13);
        }
        else if (asciiNumb >= 78 && asciiNumb <= 90 || asciiNumb >= 111 &&  asciiNumb <= 122){
            solved += String.fromCharCode(asciiNumb - 13);
        }
    else
    solved += str[i];
    }
console.log(solved);   
}
rot13("Ave Caesar!");