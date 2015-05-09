/*
Program Name: Marapets Memory
Created by: Katherine Cater
Date: 05/09/2015
Program Description:
This is a simple matching game where you flip over two tiles at a time to
try to get a match. If you get a match the tiles stay up. Otherwise they will 
flip back over. This is the first version of this program. Therefore it still has issues.
Things to fix/add:
Make it so tiles cannot be clicked on again after they've been matched.
Add a counter (points system).
Add a timer (I didn't fully understand how to create my own unique function for the timer
so I decided it was better to leave it off and add it it over the summer)
Add a replay option.
Add a high scores list. 
Make the game automatically end rather than having the user click the end button to finish. 
Add to CSS to make the visual client side aspect of the game more appealing.
*/

var cards = [
  {src: "http://images.marapets.com/pets/Addow_red.gif"},
  {src: "http://images.marapets.com/pets/Arinya_red.gif"},
  {src: "http://images.marapets.com/pets/Azul_red.gif"},
  {src: "http://images.marapets.com/pets/Basil_blue.gif"},
  {src: "http://images.marapets.com/pets/Bolimo_blue.gif"},
  {src: "http://images.marapets.com/pets/Chibs_black.gif"},
  {src: "http://images.marapets.com/pets/Crikey_black.gif"},
  {src: "http://images.marapets.com/pets/Crindol_black.gif"},
  {src: "http://images.marapets.com/pets/Daisy_yellow.gif"},
  {src: "http://images.marapets.com/pets/Dakota_yellow.gif"},
  {src: "http://images.marapets.com/pets/Decadal_yellow.gif"},
  {src: "http://images.marapets.com/pets/Doyle_yellow.gif"},
  {src: "http://images.marapets.com/pets/Echlin_orange.gif"},
  {src: "http://images.marapets.com/pets/Equilor_orange.gif"},
  {src: "http://images.marapets.com/pets/Fasoro_green.gif"},
  {src: "http://images.marapets.com/pets/Feliz_green.gif"},
  {src: "http://images.marapets.com/pets/Figaro_green.gif"},
  {src: "http://images.marapets.com/pets/Flab_green.gif"},
  {src: "http://images.marapets.com/pets/Gizmo_purple.gif"},
  {src: "http://images.marapets.com/pets/Gobble_purple.gif"},
  {src: "http://images.marapets.com/pets/Gonk_purple.gif"},
  {src: "http://images.marapets.com/pets/Grint_purple.gif"},
  {src: "http://images.marapets.com/pets/Hump_baby.gif"},
  {src: "http://images.marapets.com/pets/Huthiq_baby.gif"},
  {src: "http://images.marapets.com/pets/Jessup_red.gif"},
  {src: "http://images.marapets.com/pets/Justin_red.gif"},
  {src: "http://images.marapets.com/pets/Kaala_prison.gif"},
  {src: "http://images.marapets.com/pets/Kidlet_prison.gif"},
  {src: "http://images.marapets.com/pets/Knutt_prison.gif"},
  {src: "http://images.marapets.com/pets/Kronk_prison.gif"},
  {src: "http://images.marapets.com/pets/Kujo_prison.gif"},
  {src: "http://images.marapets.com/pets/Lati_chibi.gif"},  
  {src: "http://images.marapets.com/pets/Addow_red.gif"},
  {src: "http://images.marapets.com/pets/Arinya_red.gif"},
  {src: "http://images.marapets.com/pets/Azul_red.gif"},
  {src: "http://images.marapets.com/pets/Basil_blue.gif"},
  {src: "http://images.marapets.com/pets/Bolimo_blue.gif"},
  {src: "http://images.marapets.com/pets/Chibs_black.gif"},
  {src: "http://images.marapets.com/pets/Crikey_black.gif"},
  {src: "http://images.marapets.com/pets/Crindol_black.gif"},
  {src: "http://images.marapets.com/pets/Daisy_yellow.gif"},
  {src: "http://images.marapets.com/pets/Dakota_yellow.gif"},
  {src: "http://images.marapets.com/pets/Decadal_yellow.gif"},
  {src: "http://images.marapets.com/pets/Doyle_yellow.gif"},
  {src: "http://images.marapets.com/pets/Echlin_orange.gif"},
  {src: "http://images.marapets.com/pets/Equilor_orange.gif"},
  {src: "http://images.marapets.com/pets/Fasoro_green.gif"},
  {src: "http://images.marapets.com/pets/Feliz_green.gif"},
  {src: "http://images.marapets.com/pets/Figaro_green.gif"},
  {src: "http://images.marapets.com/pets/Flab_green.gif"},
  {src: "http://images.marapets.com/pets/Gizmo_purple.gif"},
  {src: "http://images.marapets.com/pets/Gobble_purple.gif"},
  {src: "http://images.marapets.com/pets/Gonk_purple.gif"},
  {src: "http://images.marapets.com/pets/Grint_purple.gif"},
  {src: "http://images.marapets.com/pets/Hump_baby.gif"},
  {src: "http://images.marapets.com/pets/Huthiq_baby.gif"},
  {src: "http://images.marapets.com/pets/Jessup_red.gif"},
  {src: "http://images.marapets.com/pets/Justin_red.gif"},
  {src: "http://images.marapets.com/pets/Kaala_prison.gif"},
  {src: "http://images.marapets.com/pets/Kidlet_prison.gif"},
  {src: "http://images.marapets.com/pets/Knutt_prison.gif"},
  {src: "http://images.marapets.com/pets/Kronk_prison.gif"},
  {src: "http://images.marapets.com/pets/Kujo_prison.gif"},
  {src: "http://images.marapets.com/pets/Lati_chibi.gif"}
];  
var defaultImage = "http://images.marapets.com/decade/signup.png";
var h1 = document.getElementsByTagName('h1')[0];
var nickName = "";
var previouslyClicked;
var previouslyClickedID;
var table = document.getElementById("table");
var welcome;

/*
The shuffling function is based on the Fisher-Yates shuffle method.
It uses two extra variables to move the cards around so that they are in a random order. 
I followed studied the method until I understood what it was doing and used my own variables 
*/

function shuffleTiles(cards) {
  var index = cards.length, storage, temp;
  while(index-- > 0){
    storage = Math.floor(Math.random() * (index+1)); // Get random number ranging between 0 and i
    temp = cards[storage];
    cards[storage] = cards[index];
    cards[index] = temp;
  }
}

function drawCard(card) {
  var el = document.createElement("img");
  el.class = "card";
  el.src = defaultImage;
  el.setAttribute("data-src", card["src"]);
  el.addEventListener("click", function() {
    el.src = el.getAttribute("data-src");
  });
  table.appendChild(el);
}
shuffleTiles(cards);

for(var i = 0; i < cards.length; i++){
  drawCard(cards[i]);
}

$("#table img").each(function (i, image){
  image.id = "image" + (i + 1);
});

/*
  When start button is pressed multiple things will happen. 
  Input (prompt for nickname) has been put here so it does not happen
  until the start button is pressed. 
*/

var $startButton = $("button.start");
$startButton.click(function() {
  $(this).hide();
  nickName = prompt("Please enter your nickname:");
  welcome = "Welcome, " + nickName + "! Let's play!";
  alert(welcome);
});
/*
This will end the game. 
*/
var $endButton = $("button.end");
$endButton.click(function() {
  $(this).hide();
  alert("Congrats! " + nickName + "! You finished the game!");
});

var $cards = $("#table img");

/*
This will store the first click into a variable.
Then it will compare the next click with the first click.
Once the algorithm has been run it will clear the variable
for the first click. 
*/

$cards.click(function() {
  console.log(this.src);
  console.log(this.id);
  if(previouslyClicked) {
    var oldCard = document.getElementById(previouslyClickedID);
    if(previouslyClicked === this.src) {
      alert("Match!");
    }else{
      alert("no match");
      this.src = defaultImage;
      oldCard.src = defaultImage;
    }
    previouslyClicked = false;
  }else{
    previouslyClicked = this.src;
    previouslyClickedID = this.id;
    console.log(previouslyClickedID);
  }
});