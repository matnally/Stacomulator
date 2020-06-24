
// START OF JSON //

var JSONaction = [
  { //0
    "name"         : "WRITE SET"
    ,"description" : "Write a set"
  },{ //1
    "name"         : "GIG"
    ,"description" : "Perform a gig"
  },{ //2
    "name"         : "PUBLICITY"
    ,"description" : "Do publicity work"
  },{ //3
    "name"         : "TV WORK"
    ,"description" : "Go on TV"
  }
];

// END OF JSON //


//////////
// GAME //
//////////

function gameInit() {
  //JSON init
  genreCreateJSON();
  audienceCreateJSON();
  venueCreateJSON();
  comedianCreateJSON();
  logIt("GAME", "JSON created");
  //GUI MENU INIT
  guiGameMenuStartSettings();
} //function

function gameSetConfig() {
  JSONconfig[0].JSONcomediansPerPlayerMin = document.getElementById("inpComediansPerPlayerMin").value;
  JSONconfig[0].JSONcomediansPerPlayerMax = document.getElementById("inpComediansPerPlayerMax").value;
  JSONconfig[0].JSONcomediansToCreate = document.getElementById("inpComediansToCreate").value;
  JSONconfig[0].JSONaudiencePerVenueMin = document.getElementById("inpAudiencePerVenueMin").value;
  JSONconfig[0].JSONaudiencePerVenueMax = document.getElementById("inpAudiencePerVenueMax").value;
  logIt("GAME", "Config settings applied");
} //function

function gameStart() {
  playerCreateJSONAllocateComedians(); //allocates remaining comedians to players
  logIt("GAME", "Comedians allocated to Players");
  JSONconfig[0].turn = 1; //init
  navShow("#secGameMenuMainMenu");
} //function

function gameEnd() {
  logIt("GAME", "END OF THE GAME!");
} //function


//////////
// TURN //
//////////

function gameTurnStart() {
  logIt("GAME", "START TURN");
} //function

function gameTurnEnd() {
  playerPerformTurnPlayerOther();
  logIt("GAME", "All other Player's comedians have had turns");
  JSONconfig[0].turn += 1;
  logIt("GAME", "END TURN");
  navShow("#secGameMenuMainMenu");
} //function

function gameChooseExecuteComedianTurn(intComedian) { //check what action player can do
  let intAction=0,intVenue=0;
  let boolActionChoiceOK = true;
  do {
    intAction = generateRandomNumber(0, (JSONaction.length-1)); // -1 because index
    boolActionChoiceOK = true; //reset
    switch (intAction) {
      case 0: //WRITE SET
        setCreate(intComedian, generateRandomNumber(0, JSONgenre.length-1),JSONcomedian[intComedian].name + "'s SET #" + JSONcomedian[intComedian].set.length); //-1 because index
      break;
      case 1: //GIG
        if (!JSONcomedian[intComedian].set.length > 0) boolActionChoiceOK = false;
        else {
          intVenue = generateRandomNumber(0, JSONvenue.length-1); //-1 because index
          gigCreate(intComedian
            ,JSONcomedian[intComedian].set[generateRandomNumber(0, JSONcomedian[intComedian].set.length-1)] //set -1 because index
            ,intVenue //venue
            ,generateRandomNumber(0, JSONaudience.length-1) //audience -1 because index
            ,generateRandomNumber(0, JSONgigCategory.length-1) //-1 because index
          ); //gigCreate
        } //if
      break;
      case 2: //PUBLICITY
        publicity();
      break;
      case 3: //TV WORK
        tv();
      break;
      default:
        logIt("ERROR", "comedianPerformTurn: default switch case");
    } //switch
  } while (boolActionChoiceOK == false);
  logIt("INFO", JSONcomedian[intComedian].name + " performed the action " + JSONaction[intAction].name);
} //function




///////////
// ADMIN //
///////////

function simulate() {
  let intComedian=0,intComedians=0;
  guiGameMenuStart();
  guiGameMenuStartComedianChoose();
  intComedians = generateRandomNumber(JSONconfig[0].JSONcomediansPerPlayerMin, JSONconfig[0].JSONcomediansPerPlayerMax);
  do {
    intComedian = generateRandomNumber(1, JSONcomedian.length-1); //-1 because index
    comedianAdd(0, intComedian);
    setCreate(intComedian, generateRandomNumber(0, JSONgenre.length-1), JSONmusicianNamePrefix[generateRandomNumber(0, JSONmusicianNamePrefix.length-1)] + " " + JSONmusicianNameSuffix[generateRandomNumber(0, JSONmusicianNameSuffix.length-1)] + " set");  //-1 because index
    intComedians--;
  } while(intComedians > 0) //do
  gameStart();
} //function
