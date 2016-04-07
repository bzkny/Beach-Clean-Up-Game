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
  ['balloon', 'img/cigarette.png', 3],
  ['balloon', 'img/cigarette.png', 2],
  ['balloon', 'img/cigarette.png', 1]
];
//--> GENERATE RANDOM LITTER
var litterTheBeach = function(){

  litter.forEach(function(){

    //RANDOM LITTER SELECTION
    var allTrash = litter[Math.floor(Math.random()*7)];
    //SELECT ONLY THE IMAGES
    var allTrashPics = allTrash[1];
    console.log(allTrash[1]);
    //CREATE DIV TO APPEND
    var trash = $('<div class="trash"><img src=""/> </div>');
    //ADD CONTAINERS TO BEACH
    var beach = $('.beach');
    beach.append(trash);

    //LOOP THROUGH IMG AND APPEND EACH TO BEACH
    for (var i = 0; i < allTrash.length; i++) {
      //allTrashPics[i];

      $('.trash img').attr('src', allTrashPics);

    }


    //RANDOM PLACEMENT OF TRASH ON BEACH
    trash.css("top", Math.random() * beach.innerHeight);
    trash.css("left", Math.random() * beach.innerWidth);


     /*
    $('.trash img').each(function(){
          //Change the src of each img
    });
    */
  })

}
litterTheBeach();
//--> APPEND TO UI

//PLAYER 1
//--> 1. CREATE PLAYER
//--> 2. CREATE VAR SCORE = 0;
//--> 3. CLICK EVENT TO 1) APPENDED TRASH & 2) SETTIMER
//--> 4. ON CLICK REMOVE TRASH AND ADD POINTS TO SCORE
//--> 5. WHEN ALL TRASH IS REMOVED 1) SETTIMEOUT 2) RETURN TOTAL SCORE
//--> 6. STORE PLAYER 1 TIME


//PLAYER 2
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

});//CLOSES DOCUMENT READY
