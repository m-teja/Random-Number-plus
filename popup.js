document.getElementById("option").addEventListener("change", choose);

document.getElementById("redo").onclick = choose;

function hide() {
    var x = document.getElementById("limits");
    x.style.visibility = "hidden";
}

function choose() {
    var select = document.getElementById("option");

    var x = select.options[select.selectedIndex].text;

    switch (x) {

        case "Flip a coin":
            hide();
            
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
            document.getElementById("result").innerHTML = temp;
            break;

        case "Roll a dice":
            hide();

            var rand = Math.ceil((Math.random() * 6));
            document.getElementById("result").innerHTML = "You rolled a " + rand;
            break;

        case "Draw a random card":
            hide();
            
            var rand1 = Math.ceil((Math.random() * 4));
            var suit;
            switch (rand1) {
                case 1:
                    suit = "Hearts";
                    break;

                case 2:
                    suit = "Diamonds";
                    break;

                case 3:
                    suit = "Spades";
                    break;

                case 4:
                    suit = "Clubs";
                    break;
                default:
                    break;
            }

            var rand2 = Math.ceil((Math.random() * 13));
            var rank;
            switch (rand2) {
                case 1:
                    rank = "Ace";
                    break;

                case 11:
                    rank = "Jack";
                    break;

                case 12:
                    rank = "Queen";
                    break;

                case 13:
                    rank = "King";
                    break;
                    
                default:
                    rank = rand2;
                    break;
            }
            document.getElementById("result").innerHTML = rank + " of " + suit;
            break;

            
        case "Generate a number":
            hide();
            
            var x = document.getElementById("limits");
            x.style.visibility = "visible";
            
            var test = document.getElementById("value1").value;
            var test1 = document.getElementById("value2").value;
            
            document.getElementById("result").innerHTML = test + " " + test1;
            break;
    }
}