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
var minutes = 0;
var nickName = "";
var seconds = 0;
var time;
var table = document.getElementById("table");
var welcome;

function shuffleTiles(cards) {
  var i = cards.length, j, temp;
  while(--i > 0){
    j = Math.floor(Math.random() * (i+1)); // Get random number ranging between 0 and i
    temp = cards[j];
    cards[j] = cards[i];
    cards[i] = temp;
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

function add() {
  seconds++;
  if (seconds >= 60) {
      seconds = 0;
      minutes++;
  }
  h1.textContent = (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + 
  (seconds > 9 ? seconds : "0" + seconds)
  timer();
}

function timer() {
    time = setTimeout(add, 1000);
}
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
  timer();
});

var $endButton = $("button.end");
$endButton.click(function() {
  $(this).hide();
  alert("Congrats! " + nickName + "! You finished the game!");
});

var $cards = $("#table img");
var previouslyClicked;
var previouslyClickedID;
$cards.click(function(event) {
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
    
    // either way clear previous value
    previouslyClicked = false;
  }else{
    previouslyClicked = this.src;
    previouslyClickedID = this.id;
    console.log(previouslyClickedID);
    console.log(oldCard);
  }
});
