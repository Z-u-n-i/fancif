// Called when the "Bigger!" button is clicked
function makeBigger() {
    // Step: test JS is working
    alert("Hello, world!");

    const textArea = document.getElementById("textArea");
    textArea.style.fontSize = "24pt";
}

// Called when "FancyShmancy" radio is changed
function setFancy() {
    const fancy = document.getElementById("fancy");
    const textArea = document.getElementById("textArea");

    if (fancy.checked) {
        // Step: optional alert to test onchange
        // alert("FancyShmancy!");

        textArea.style.fontWeight = "bold";
        textArea.style.color = "blue";
        textArea.style.textDecoration = "underline";
    }
}

// Called when "BoringBetty" radio is changed
function setBoring() {
    const boring = document.getElementById("boring");
    const textArea = document.getElementById("textArea");

    if (boring.checked) {
        // Step: optional alert to test onchange
        // alert("BoringBetty!");

        textArea.style.fontWeight = "normal";
        textArea.style.color = "black";
        textArea.style.textDecoration = "none";
    }
}

// Called when the "Moo" button is clicked
function moo() {
    const textArea = document.getElementById("textArea");
    let text = textArea.value.toUpperCase(); // uppercase everything

    // Split into sentences on "."
    let sentences = text.split(".");

    for (let i = 0; i < sentences.length; i++) {
        let sentence = sentences[i].trim();
        if (sentence.length > 0) {
            // Split into words
            let words = sentence.split(" ");
            let lastIndex = words.length - 1;

            if (lastIndex >= 0) {
                // Add "-Moo" to the last word
                words[lastIndex] = words[lastIndex] + "-MOO";
            }

            // Join words back into a sentence
            sentences[i] = words.join(" ");
        }
    }

    // Join sentences back together with periods
    let newText = sentences
        .filter(s => s.trim().length > 0)
        .join(". ") + ".";

    textArea.value = newText;
}
