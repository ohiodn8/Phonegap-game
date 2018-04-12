var the_array = ['😆', '😆', '😅','😅','😡','😡','😍','😍','🙀','🙀','🙋','🙋','🙉','🙉','🙇','🙇','❤','❤','🚢','🚢','🚗','🚗','🚉','🚉'];
var the_values = [];
var the_card_ids = [];
var cards_flipped = 0;
Array.prototype.the_card_shuffle = function(){
    var i = this.length, j, temp;
    while(--i > 0){
        j = Math.floor(Math.random() * (i+1));
        temp = this[j];
        this[j] = this[i];
        this[i] = temp;
    }
}

function newBoard(){
    cards_flipped = 0;
    var output = '';
    the_array.the_card_shuffle();
    for (var i = 0; i < the_array.length; i++){
        output += '<div id="card_'+i+'" onclick="theFlipCard(this,\''+the_array[i]+'\')"></div>';
    }
    document.getElementById('the_canvas').innerHTML = output;
}
function theFlipCard(card,val){
    if(card.innerHTML == "" && the_values.length < 2){
        card.style.background = '#FFF';
        card.innerHTML = val;
        if(the_values.length == 0){
            the_values.push(val);
            the_card_ids.push(card.id);
        } else if(the_values.length == 1){
            the_values.push(val);
            the_card_ids.push(card.id);
            if(the_values[0] == the_values[1]){
                cards_flipped += 2;
                // Clear both arrays
                the_values = [];
                the_card_ids = [];
                // Check to see if the whole board is cleared
                if(cards_flipped == the_array.length){
                    alert("Game Complete! Start New...");
                    document.getElementById('the_canvas').innerHTML = "";
                    newBoard();
                }
            } else {
                function flip2Back(){
                    // Flip the 2 cards back over
                    var card_1 = document.getElementById(the_card_ids[0]);
                    var card_2 = document.getElementById(the_card_ids[1]);
                    card_1.style.background = 'url(card_img.jpg) no-repeat';
                    card_1.innerHTML = "";
                    card_2.style.background = 'url(card_img.jpg) no-repeat';
                    card_2.innerHTML = "";
                    // Clear both arrays
                    the_values = [];
                    the_card_ids = [];
                }
                setTimeout(flip2Back, 700);
            }
        }
    }
} 