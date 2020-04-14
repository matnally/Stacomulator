
// START OF JSON //

var JSONcomedian = [
  // {
  //   "name"         : "Jerry Sadowitz"
  //   ,"description" : "Notorious for his frequently controversial brand of comedy"
  //   ,"image"       : JSONconfig[0].imageFolderComedian + "jerrysadowitz.png"
  //   ,"set"         : [] //written sets
  // },{
  //   "name"         : "Michael McIntyre"
  //   ,"description" : "Bland observational humour aimed at non-thinking audiences"
  //   ,"image"       : JSONconfig[0].imageFolderComedian + "michaelmcIntyre.png"
  //   ,"set"         : []
  // },{
  //   "name"         : "Daniel Kitson"
  //   ,"description" : "About as good as comedy gets"
  //   ,"image"       : JSONconfig[0].imageFolderComedian + "danielkitson.png"
  //   ,"set"         : []
  // }
];

function comedianCreateJSON() {
  for (let c=JSONconfig[0].JSONcomediansToCreate;c>0;c--) {
    comedianCreate(getRandomName(), "strDesc" + JSONcomedian.length, "image.png");
  } //for
} //function

function comedianCreate(strName, strDesc, strImage) {
  JSONcomedian.push({
    "name"         : strName
    ,"description" : strDesc
    ,"image"       : JSONconfig[0].imageFolderComedian + strImage
    ,"set"         : []
  });
} //function

function comedianCreateCustom(strName, strDesc, strImage) {
  comedianCreate(strName, strDesc, strImage);
  comedianAdd(0, JSONcomedian.length-1); //-1 because index
} //function

// END OF JSON //



// START ADD A COMEDIAN SUPPORTED FUNCTIONS //
function comedianAdd(intPlayer, intComedian) {
  if (inArray(JSONplayer[intPlayer].comedian, intComedian)) { //COMEDIAN already chosen
    alert("Already added");
  } else {
    JSONplayer[intPlayer].comedian.push(intComedian); //adds the comedian to the player
    logIt("GAME", JSONplayer[intPlayer].name + " added " + JSONcomedian[intComedian].name);
    guiGameMenuStartComedianChosen();
  } //if
} //function
function comedianMove(intStep) {
  let intComedian = comedianMoveGet(intStep);
updateElement("divComedianChoose", guiCreateComedianHTML(intComedian));
reDrawreListen(intComedian);
if (document.getElementById("selComedian")) document.getElementById("selComedian").value = intComedian; //TODO better
} //function
function comedianMoveGet(intStep) { //returns safe (not below 0 or above length) comedian index when moving up and down array
  let intComedian = 0;
//TODO better
if (document.getElementById("selComedian")) intComedian = parseInt(document.getElementById("selComedian").value); //get current comedian
else intComedian = 0;
  intComedian += intStep; //invoke step
  if (intComedian < 0) intComedian = JSONcomedian.length - 1; //beyond the start so go to end (-1 becuase its an index)
  else if (intComedian >= JSONcomedian.length) intComedian = 0; //beyond the end so go to start
  return intComedian;
} //function
// END ADD A COMEDIAN SUPPORTED FUNCTIONS //


function reDrawreListen(intComedian) {
  document.getElementById("selComedian").addEventListener("change",function(event){
    updateElement("divComedianChoose", guiCreateComedianHTML(this.value));
    reDrawreListen(this.value);
  }, {passive: true});
  document.getElementById("selComedian").value = intComedian; //get current comedian
} //function


function comedianUpdate(intComedian, intAction) { //update a comedian's attributes for the action
  switch (intAction) {
    case 0: //GIG
      // JSONcomedian[intComedian].reputation += JSONconfig[0].gigComedianReputation;
    break;
    case 1: //SET
      // JSONcomedian[intComedian].reputation += JSONconfig[0].setComedianReputation;
    break;
    default:
  } //switch
} //function



//////////////////////
//// CALCULATIONS ////
//////////////////////

function comedianCalcExperience(intComedian) {
  let intExperience=0,intNoOfSets=0,intComedianNoOfGigs=0;
  intNoOfSets = JSONcomedian[intComedian].set.length;
  intComedianNoOfGigs = comedianCalcNoOfGigs(intComedian);
  /***************** CALC ********************/
  intExperience = intNoOfSets + intComedianNoOfGigs
  /*******************************************/
  return intExperience;
} //function

function comedianCalcNoOfTimesUsedSet(intComedian, intSet) {
  let intNoOfTimesUsedSet = 0;
  for (let g in JSONgig) { //for every gig
    if ((JSONgig[g].comedian === intComedian) && (JSONgig[g].set === intSet)) { //current comedian played this gig
      intNoOfTimesUsedSet += 1;
    } //if
  } //for
  return intNoOfTimesUsedSet;
} //function

function comedianCalcNoOfGigs(intComedian) {
  let intNoOfGigs = 0;
  for (let g in JSONgig) {
    if (JSONgig[g].comedian === intComedian) {
      intNoOfGigs += 1;
    } //if
  } //for
  return intNoOfGigs;
} //function



//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////
