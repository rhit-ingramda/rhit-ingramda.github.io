main = function() {
    console.log("Ready");

    document.querySelector("#decrementButton").onclick = (event) => {
        console.log("decrement");
        counter --;
        updateView();
    };
    document.querySelector("#resetButton").onclick = (event) => {
        console.log("reset");
        counter = 0;
        updateView();
    };
    document.querySelector("#incrementButton").onclick = (event) => {
        console.log("increment");
        counter++;
        updateView();
    };
}

main();

let counter = 0;

updateView = function() {
    document.querySelector("#counterText").innerHTML = `Count = ${counter}`;
}