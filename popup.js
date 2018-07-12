document.getElementById("option").addEventListener("change", choose);

document.getElementById("redo").onclick = choose;

function hide() {
    var x = document.getElementById("limits");
    x.style.display = "none";
    
    var x1 = document.getElementById("include");
    x1.style.display = "none";
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
            x.style.display = "inline";
            
            var bound = document.getElementById("value1").value;
            var bound1 = document.getElementById("value2").value;
            
            var lower = (bound > bound1) ? bound1 : bound;
            var higher = (lower === bound) ? bound1 : bound;
            
            var res = Math.floor(Math.random() * (higher - lower + 1)+ parseInt(lower)) ;
            if (!(isNaN(res))) {
                document.getElementById("result").innerHTML = res;
            }
            
            break;
        
        case "Generate a random 10 character string":
            hide();
            
            var letters = "";
            
            if (document.getElementById("letters").checked === true) {
                letters += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
            }
            if (document.getElementById("numbers").checked === true) {
                letters += "1234567890";
            }
            if (document.getElementById("special").checked === true) {
                letters += "!#$%&'()*+,-./:;<=>?@[\]^_`{|}~";
            }

            var x = document.getElementById("include");
            x.style.display = "inline";
            
            var out = "";
            
            for (x = 0; x < 10; x++) {
                var rand = Math.floor(Math.random() * letters.length);
                out += letters.charAt(rand);
            }
            if (out.length === 0) {
                out = "-";
            }
            document.getElementById("result").innerHTML = out;
            break;
            
        case "Generate an anagram":
            hide();
            
            var input = document.getElementById("anagram").value;
            
            var ary = input.toString().split('');
            var out = "";
            var repeat = ary.length;
            for (x = 0; x < repeat; x++) {
                var temp = Math.floor(Math.random() * ary.length);
                out += ary.splice(temp-1, 1);
                console.log(ary.length);
            }
            document.getElementById("result").innerHTML = out;
            break;
       
    }
}