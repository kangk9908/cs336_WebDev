function parseValueInTextArea() {
    // select textarea from DOM while not using var because var bad very bad
    const textarea = document.querySelector("textarea");

    // using 'addEvenListener' to detect and keyboard inputs
    textarea.addEventListener("input", function () {
        // set value to take in the number of words put it
        // based off of how many spaces are put in
        let numWords = document.getElementById("text-area").value.split(" ").length - 1;
        // retrieve 'numWords' element from 'display-words'
        document.getElementById("display-words").innerHTML = numWords +
            // "proper plurals are used in the various cases"
            (numWords == 1 ? " Word" : " Words");

        // set value to take in the number of characters put it
        // based off of any and all input values from keyboard
        let numChars = document.getElementById("text-area").value.length;
        // retrieve 'numChars' element from 'display-characters'
        document.getElementById("display-characters").innerHTML = numChars +
            // "proper plurals are used in the various cases"
            (numChars == 1 ? " Character" : " Characters");
    });
}
parseValueInTextArea();