let progress = 0;
let loadingBar = document.getElementById('loading-bar');
let lineProg = 0;
let chosenLine;
let inputText = "";
let lines = [
    ["Loading...", "Scanning account", "Scanning media", "Using AI algorithm", "Waiting for response", "HIGH CUTENESS LEVELS DETECTED"],
    ["Loading...", "Processing", "Checking database", "Consulting doctor", "Official diagnosis: SUPER CUTE"],
    ["Thinking", "Thinking some more", "Thinking even more", "Almost done", "Nevermind I need to think more", "Yeah no, there's no doubt that " + inputText + " is cute"],
    ["Please be patient, scanning may take a while", "Nevermind, it's very obvious that " + inputText + " is cute"],
    ["Scanning", "...", "...", "Sorry, I got distracted by how cute you were", "Test results: " + inputText + " is CUTE!"],
    ["Loading...", "Connecting to server", "Scanning", "Cuteness overload detected", "Adjusting values to handle cuteness overload", "Final cuteness score: 592.6/10"],
    ["Loading...", "Scanning profile", "Inputing algorithm", "Warning: Overflow Detected", "Error: Method outputCutenessLevel() takes an integer. The input variable cutenessLevel is infinite."]
];

function runCutenessTest() {
    const inputText = document.getElementById("usernameInput").value;
    if (inputText != "") {
        document.getElementById("usernameInput").style.display = "none";
        document.querySelector("button").style.display = "none";
        const wrapper = document.getElementById("loading-wrapper");
        wrapper.style.display = "flex";
        loadingBar.style.width = '0%';
        chosenLine = Math.trunc(Math.random()*lines.length);
        updateLoading();
    }
}

function updateLoading() {
    let rand = Math.trunc((Math.random() * (100/(lines[chosenLine].length)/2) + ((100/(lines[chosenLine].length))/2)));
    progress += rand;
    document.getElementById("computeText").innerHTML = lines[chosenLine][lineProg];
    loadingBar.style.width = progress + "%";

    if (lineProg != lines[chosenLine].length-1) {
        lineProg++;
        setTimeout(updateLoading, 5000);
    } else {
        loadingBar.style.width = "100%";
        document.getElementById("spinner").style.display = "none";
    }
}