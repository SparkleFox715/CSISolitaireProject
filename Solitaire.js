
document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('new_game').addEventListener('click', () => {
        start(); 
    });document.getElementById('card1').addEventListener('click', () => {
        getCard(1);
    });
    document.getElementById('card2').addEventListener('click', () => {
        getCard(2);
    });
    document.getElementById('card3').addEventListener('click', () => {
        getCard(3);
    });
    document.getElementById('card4').addEventListener('click', () => {
        getCard(4);
    });
    document.getElementById('card5').addEventListener('click', () => {
        getCard(5);
    });
    document.getElementById('card6').addEventListener('click', () => {
        getCard(6);
    });
    document.getElementById('card7').addEventListener('click', () => {
        getCard(7);
    });
});
var youscore=0;
var compscore =0;
var pile1 = Array();
var pile2 = Array();
function getCard(card){
    var p2loc=-1;
    var face= pile1[card].substring(pile1.length-1, pile1.length);
        for(var i =0;i<pile2.length;i++){
            if(pile2[i].includes(face)){
                p2loc =i;
                break;
            }
        }
        if(p2loc!=-1){
        console.log(p2loc);
        console.log(card);
        pile2.splice(p2loc,1);
        pile1.splice(card-1,1);
        youscore++;
        }
    

    var youscore = document.getElementById("Yourscore").value = "Your score: "+youscore;
}
function start(){
    var deck1 = Array();

    deck1.push("0C");
    deck1.push("0D");
    deck1.push("0H");
    deck1.push("0S");
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










    








