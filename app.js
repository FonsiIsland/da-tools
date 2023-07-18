const loopSplitterNumberInput = document.querySelector("#loopterSplitter-number");
const loopSplitterStringInput = document.querySelector("#loopterSplitter-string");
const loopSplitterOutput = document.querySelector(".output-wrapper");


document.getElementById("loopSplitter-submit").addEventListener('click', loopSplitter);

function loopSplitter(){
    if(loopSplitterNumberInput.value != null && loopSplitterStringInput.value != null && loopSplitterStringInput.value.includes("&i")) {
        loopSplitterOutput.innerHTML = "";
        for(var i = 0; i < loopSplitterNumberInput.value; i++){
            loopSplitterOutput.innerHTML += loopSplitterStringInput.value.replace("&i", i + "") + "\n";
        }
    }
}