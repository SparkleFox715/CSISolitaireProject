document.addEventListener("DOMContentLoaded", function() {
    document.getElementById('new_game').addEventListener('click', () => {
        start(); 
    });
});

async function start(){
    var resp;
    let fetchRes = fetch(
        "https://deckofcardsapi.com/api/deck/new/shuffle");
          
                // fetchRes is the promise to resolve
                // it by using.then() method
                fetchRes.then(res =>
                    res.json()).then(d => {

                        console.log(d);
                        $.each(d, function() {
                            var key = Object.keys(this)[0];
                            var value = this[key];
                            //do something with value;
                          }); 

                          console.log(d["deck_id"]);
                    })
               
        }












    








