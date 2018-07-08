document.getElementById("option").addEventListener("change", choose);


function choose() {
    var select = document.getElementById("option");

    var x = select.options[select.selectedIndex].text;

    switch (x) {

        case "Flip a coin":
            document.getElementById("test").innerHTML = "coin";
            break;

        case "Roll a dice":
            document.getElementById("test").innerHTML = "dice";
            break;

        case "Generate a number":
            document.getElementById("test").innerHTML = "rng";
            break;
    }
}