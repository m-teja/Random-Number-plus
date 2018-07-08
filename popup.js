document.getElementById("option").addEventListener("change", choose);

document.getElementById("redo").onclick = choose;

function choose() {
    var select = document.getElementById("option");

    var x = select.options[select.selectedIndex].text;

    switch (x) {

        case "Flip a coin":
            var temp;
            var rand = Math.ceil((Math.random() * 2));
            switch (rand) {
                case 1:
                    temp = "Heads";
                    break;
                case 2:
                    temp = "Tails";
                    break;
            }
            document.getElementById("test").innerHTML = temp;
            break;

        case "Roll a dice":
            document.getElementById("test").innerHTML = "dice";
            break;

        case "Generate a number":
            document.getElementById("test").innerHTML = "rng";
            break;
    }
}