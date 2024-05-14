//https://www.w3schools.com/html/html5_webstorage.asp

document.addEventListener("DOMContentLoaded", () => {
    run();
});

function run() {
    //grab bigger Button
    let big = document.querySelector(".biggerButton");
    let big3 = document.getElementById("biggerButton");
    let big4 = document.querySelector("#biggerButton");

    //grab box
    let box = document.getElementById("box1");

    //Grab radio buttons
    const radio = document.querySelectorAll('input[type="radio"]');
    const radioButton1 = document.getElementById("radio1");
    const radioButton2 = document.getElementById("radio2");
    const radioButton3 = document.getElementById("radio3");

    //Get words in textbox
    let words = box.value;

    //Local storage
    textboxStorage()

    console.log(big)
    console.log(big3)
    console.log(big4)
    console.log(box)
    console.log(radio)

    big.addEventListener("click", () => { alertButton(); enlarge(); }, false);
    for (var i = 0; i < radio.length; i++) {
        radio[i].addEventListener('change', () => { selected(); }, false);
        //document.getElementById("box1").style.fontWeight = "bold";
    }

    radioButton1.addEventListener("change", () => { changeStyle() }, false);
    radioButton2.addEventListener("change", () => { ridStyle() }, false);
    radioButton3.addEventListener("change", () => { mooCapitalize() }, false);

}

//Local storage for textbox function
function textboxStorage() {
    if (typeof (Storage) !== "undefined") {
        let words = localStorage.getItem("words");
        if (typeof words !== 'undefined' && words !== null) {
            //Retrieve
            document.getElementById("box1").value = words;
        }
        else {
            localStorage.setItem("words", "");
            document.getElementById("box1").value = localStorage.getItem("words");
        }


    } else {
        console.log("No local storage support.")
    }
}

//Bigger button functions
function alertButton() {
    alert('Hello, world!');

}
function enlarge() {
    document.getElementById("box1").style.fontSize = "24px";
    localStorage.setItem("words", document.getElementById("box1").value);

}


//Radio button functions
function selected() {
    alert("You've clicked me! Change is on its way~.");
    localStorage.setItem("words", document.getElementById("box1").value);
}

function mooCapitalize() {
    let upper = document.getElementById("box1").value.toUpperCase();
    document.getElementById("box1").value = upper;

    let sentences = document.getElementById("box1").value;
    console.log(sentences);
    let parts = sentences.split(".").join("-Moo.").split("!").join("-Moo!").split("?").join("-Moo?");

    document.getElementById("box1").value = parts;

}

function changeStyle() {
    document.getElementById("box1").style.fontWeight = "bold";
    document.getElementById("box1").style.color = "blue";
    document.getElementById("box1").style.textDecoration = "underline";

}
function ridStyle() {
    document.getElementById("box1").style.fontSize = "initial";
    //Other Rid Style options

    document.getElementById("box1").style.fontWeight = "initial";
    document.getElementById("box1").style.color = "black";
    document.getElementById("box1").style.textDecoration = "none";


}

