$(document).ready(function(){

//BEACH CLEAN-UP MVP

//2 USERS - 1 AT A TIME - FASTEST TIME WINS

//BEACH SET UP
//--> CREATE LITTER LIST
var litter = [
  ['cigarette', 'img/cigarette.png', 10],
  ['sixpack', 'img/sixpack.png', 9],
  ['balloon', 'img/balloon.png', 8],
  ['trashbag', 'img/trashbag.png', 7],
  ['logs', 'img/logs.png', 6],
  ['fishNet', 'img/fishNet.png', 5],
  ['waterbottle', 'img/waterbottle.png', 4],
  ['glass', 'img/bottle.png', 3],
  ['plasticbag', 'img/shoppingbag.png', 2],
  ['shoppingbag', 'img/shoppingbag.png', 1]
];


//prompts
var trashPickedUp = 0;
var players = [];
var playerScores = [];
var whosTurn = 1;
var user1 = prompt("hey player what's your name?");
players.push(user1)
console.log(players);
  //--> 2. CREATE VAR SCORE = 0;
userScore1 = 0;
  //--> 3. CLICK EVENT TO 1) SETTIMER
var startTime = Date.now()

$('button').on('click', function currentTime(event) {
  startTime = Date.now();
  console.log(startTime);
  event.preventDefault();
});



var litterTheBeach = function(){

//--> GENERATE RANDOM LITTER
  litter.forEach(function(){
    //RANDOM LITTER SELECTION
    var allTrash = litter[Math.floor(Math.random()*10)];
    //SELECT ONLY THE IMAGES
    var allTrashPics = allTrash[1];
    //CREATE DIV TO APPEND
    var trash = $('<div class="trash"><img class="trashpic" src=""/> </div>');
    var litterNum = $(trash).children('img').attr('src',allTrashPics);
    //ADD CONTAINERS TO BEACH
    var beach = $('.beach');
    beach.append(trash);

    //RANDOM PLACEMENT OF TRASH ON BEACH
    var bodyX = $('.container').innerWidth() - 90;
    var bodyY = $('body').innerHeight() + 50;
    trash.css("left", Math.random() * bodyX);
    trash.css("top", Math.random() * bodyY);
  })

//REMOVE TRASH

    players.forEach(function(){
      $('.trash').click(function(event) {
        if (whosTurn == 1){

          $(this).remove();
          trashPickedUp += 1;


          if ($('.trash').length <= 0){
            alert("Nice work " + user1 + " you cleaned up all the trash!");

            //RESET TIMER
            var endTime = Date.now();

            //RECORD USER TIME

            var yourTime = endTime-startTime;
            var yourTimeSeconds = yourTime / 1000;
            document.getElementById("p1Time").innerHTML = "Time: " + yourTimeSeconds + "sec";

            playerScores.push(yourTimeSeconds);
            console.log(playerScores);
            //PLAYER 2 STARTS
            whosTurn = 2;
           console.log('p2 turn')
            startTime = Date.now()
            var user2 = prompt("You think you can top " + user1 + "? Enter your name and click start");
            players.push(user2);
            console.log(players);
            litterTheBeach();

          }

      } else if (whosTurn == 2){

        $(this).remove();
        trashPickedUp += 1;

        if ($('.trash').length <= 0){
          //RESET TIMER
          var endTime = Date.now();

          //RECORD USER TIME
          var yourTime = endTime-startTime;
          var yourTimeSeconds = yourTime / 1000;
          document.getElementById("p2Time").innerHTML = "Time: " + yourTimeSeconds + "sec";

          playerScores.push(yourTimeSeconds);
          console.log(playerScores);
          whosTurn==3
          compareScores();

          event.preventDefault();

        }
      }

    });//CLOSES TRASH REMOVAL

  });//CLOSES PLAYS

}//CLOSES litterTheBeach
litterTheBeach();

function compareScores(){
    //COMPARE 2 SCORES
    whosTurn==3
        if (playerScores[0] - playerScores[1] > 0 ){
          alert(players[1] + " wins!");
        } else if (playerScores[1] - playerScores[0] > 0 ){

          alert(players[0]+ " wins!");

      } else {
        alert("it's a tie! Together you saved a baby turtle's life!");
      }
}

});//CLOSES DOCUMENT READY



//--> APPEND TO UI

//PLAYER 1
//--> 1. CREATE PLAYER


//--> 4. ON CLICK 1. REMOVE TRASH 2. CHECK IF TRASH === 0 AND ADD POINTS TO SCORE


//--> 5. WHEN ALL TRASH IS REMOVED 1) SETTIMEOUT 2) RETURN TOTAL SCORE



//--> 6. STORE PLAYER 1 TIME


//PLAYER 2
//--> ON START - re-populate
//--> SAME AS 1-5
//--> 6. STORE PLAYER 2 TIME

//COMPARE PLAYER 1 to PLAYER 2
//--> Return winner
//alert("Congratulations you saved a dolphin!")

//BONUS
//1. ASSIGN HIGHER VALUES FOR LARGER LITTER AND
//2. LITTER BEACH WITH SAME TOTAL VALUE FOR EACH USER
//3. TORE SCORES IN COOKIES
//4. RESET SCORES AFTER

