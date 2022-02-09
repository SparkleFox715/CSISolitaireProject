document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('new_game').addEventListener('click', () => {
        start(); 
    });
});

function start(){
    var deck1 = Array();

    deck1.push("OC");
    deck1.push("OD");
    deck1.push("OH");
    deck1.push("OS");
    deck1.push("2C");
    deck1.push("2D");
    deck1.push("2S");
    deck1.push("3C");
    deck1.push("2H");
    deck1.push("3D");
    deck1.push("3H");
    deck1.push("3S");
    deck1.push("4C");
    deck1.push("4D");
    deck1.push("4H");
    deck1.push("4S");
    deck1.push("5C");
    deck1.push("5D");
    deck1.push("5H");
    deck1.push("5S");
    deck1.push("6C");
    deck1.push("6D");
    deck1.push("6H");
    deck1.push("6S");
    deck1.push("7C");
    deck1.push("7D");
    deck1.push("7H");
    deck1.push("7S");
    deck1.push("8C");
    deck1.push("8D");
    deck1.push("8H");
    deck1.push("8S");
    deck1.push("9C");
    deck1.push("9D");
    deck1.push("9H");
    deck1.push("9S");
    deck1.push("AC");
    deck1.push("AD");
    deck1.push("AH");
    deck1.push("AS");
    deck1.push("JC");
    deck1.push("JD");
    deck1.push("JH");
    deck1.push("JS");
    deck1.push("KC");
    deck1.push("KD");
    deck1.push("KH");
    deck1.push("KS");
    deck1.push("QC");
    deck1.push("QD");
    deck1.push("QH");
    deck1.push("QS");




    shuffle(deck1);


    var pile1 = Array();
    var pile2 = Array();
    


    for(var i = 0; i<7; i++)
    {


        var temp = deck1.pop()
        pile1.push(temp);
        var img = document.createElement("img");
 
img.src = temp+".png"; 
console.log("card"+ (i+1));
var x = document.getElementById("card"+ (i+1)); 
x.appendChild(img); 




        pile2.push(deck1.pop());




    }

    console.log(pile1);
    console.log(pile2);


    






               
        }

        function shuffle(array) {
            let currentIndex = array.length,  randomIndex;
          
            // While there remain elements to shuffle...
            while (currentIndex != 0) {
          
              // Pick a remaining element...
              randomIndex = Math.floor(Math.random() * currentIndex);
              currentIndex--;
          
              // And swap it with the current element.
              [array[currentIndex], array[randomIndex]] = [
                array[randomIndex], array[currentIndex]];
            }
          
            return array;
          }










    








