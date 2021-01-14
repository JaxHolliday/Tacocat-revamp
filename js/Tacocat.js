function tacocat() {
    //Button clicked event
    //Step 1
    //Retreiving Data
    let userInput = document.getElementById("reverseString").value;

    //Step 2
    //Work with the gathered data
    let palinWord = ""
    for (let loop = userInput.length - 1; loop >= 0; loop--) {
        palinWord += userInput.charAt(loop).toLowerCase();
    };
    //Step 3
    //Result

    if (userInput == palinWord) {
        swal("Gotcha!", "Tacocat was caught!", "success");        
    } else {
        swal("Sorry!", "Tacocat fainted! you gained 500 XP!", "error");        
    }
    document.getElementById("reverseOutput").innerHTML = palinWord;
};

