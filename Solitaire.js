document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('new_game').addEventListener('click', () => {
        start(); 
    });
});

function start(){
    const response = await fetch("https://deckofcardsapi.com/api/deck/new/shuffle");
    let jsonData = JSON.parse(response);
    console.log(jsonData);



    



        }












    








