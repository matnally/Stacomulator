
// START OF JSON //

var JSONplayer = [{ //USER'S PLAYER!
  "name"      : "Player 1"
  ,"comedian" : []
}];

function playerCreate(arrTemp) { //create player
  JSONplayer.push({"name" : getRandomName()
                  ,"comedian" : arrTemp
  }); //push
} //function

function playerCreateJSONAllocateComedians() {
  let intComediansToAdd=0,intRandomComedianIndex=0,intRandomComedian=0;
  let arrTemp=[], arrComediansRemaining=[];
  JSONcomedian.forEach(function(v, i) {
    if (!inArray(JSONplayer[0].comedian, i)) //only add comedian that player hasn't chosen already
      arrComediansRemaining.push(i);
  }); //creates an array of just positions from all Comedians in JSONComedian
  //TODO: removes comedians Player has alread choosen / created
  do {
    arrTemp = []; //reset array for new band
    intComediansToAdd = generateRandomNumber(JSONconfig[0].JSONcomediansPerPlayerMin, JSONconfig[0].JSONcomediansPerPlayerMax);//create random number between 1-4 for no. of Comedians to add
    if (intComediansToAdd <= arrComediansRemaining.length) { //check if have enough Comedians to add
      //Good! Comedians to add SHOULD be less than the length of arrComediansRemaining
    } else {
      //Not a lot of Comedians left (less than 4) so just create a band from the rest
      intComediansToAdd = arrComediansRemaining.length
    } //if
    for (let i=1;i<=intComediansToAdd;i++) {  // 1 because 0 is player's id
      intRandomComedianIndex = generateRandomNumber(0, arrComediansRemaining.length-1); //TODO -1 hmmm???
      intRandomComedian = arrComediansRemaining[intRandomComedianIndex]; //get random Comedian from remaining using index value created above
      arrTemp.push(intRandomComedian); //add chosen random Comedian
      arrComediansRemaining.splice(intRandomComedianIndex, 1); //remove chosen random Comedian
    } //for
    playerCreate(arrTemp);
  } while (arrComediansRemaining.length > 0); //do while
} //function

// END OF JSON //


//OTHER PLAYERS
function playerPerformTurnPlayerOther() {
  for (let p in JSONplayer) { //every player
    if (!p==0) { //to ensure not real PLAYER - TODO why not === ?! diff type?
      for (let c in JSONplayer[p].comedian) { //every comedian in player array
        gameChooseExecuteComedianTurn(JSONplayer[p].comedian[c]);
      } //for
    } //if
  } //for
} //function
