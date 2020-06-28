
// START OF JSON //

var JSONcomedian = [];

function comedianCreateJSON() {
  for (let c=JSONconfig[0].JSONcomediansToCreate;c>0;c--) {
    comedianCreate(getRandomName(), "strDesc" + JSONcomedian.length);
  } //for
} //function

function comedianCreate(strName, strDesc) {
  JSONcomedian.push({
    "name"         : strName
    ,"description" : strDesc
    ,"image"       : generateIdenticon(strName) //generate unique jDenticon avatar
    ,"set"         : []
    ,"reputation"  : 0
  });
} //function

function comedianCreateCustom(strName, strDesc) {
  //TODO: strImage will never be full path. Can't upload it. Choose existing?
  comedianCreate(strName, strDesc);
  comedianAdd(0, JSONcomedian.length-1); //-1 because index
} //function

// END OF JSON //


function comedianAdd(intPlayer, intComedian) {
  if (inArray(JSONplayer[intPlayer].comedian, intComedian)) { //COMEDIAN already chosen
    alert("Already added");
  } else {
    JSONplayer[intPlayer].comedian.push(intComedian); //adds the comedian to the player
    logIt("GAME", JSONplayer[intPlayer].name + " added " + JSONcomedian[intComedian].name);
    guiGameMenuStartComedianChosen();
  } //if
} //function

function updateStatsFromAction(intComedian, intAction, intSet) {
  //Select what values to update the attributes
  switch (intAction) {
    case 0: //GIG
      // comedianUpdate(intComedian, JSONconfig[0].gigComedianReputation); //add to COMEDIAN when GIG performed
      // setUpdate(intSet, JSONconfig[0].gigSetReputation) //add to SET when GIG performed
      JSONcomedian[intComedian].reputation += JSONconfig[0].gigComedianReputation;
      JSONset[intSet].reputation += JSONconfig[0].gigSetReputation;
    break;
    case 1: //SET WRITE
      // comedianUpdate(intComedian, JSONconfig[0].setComedianReputation); //add to COMEDIAN when SET written
      // setUpdate(intSet, JSONconfig[0].setSetReputation) //add to SET when SET written
      JSONcomedian[intComedian].reputation += JSONconfig[0].setComedianReputation;
      // JSONset[intSet].reputation = JSONcomedian[intComedian].reputation;
    break;
    default:
  } //switch
} //function

// function comedianUpdate(intComedian, intReputation) {
//   //Update attributes of comedian
//   JSONcomedian[intComedian].reputation += intReputation;
// } //function
//
// function setUpdate(intSet, intReputation) {
//   //Update attributes of comedian
//   JSONset[intSet].reputation += intReputation;
// } //function


//////////////////////
//// CALCULATIONS ////
//////////////////////

function comedianCalcExperience(intComedian) {
  let intExperience=0,intNoOfSets=0,intComedianNoOfGigs=0;
  intNoOfSets = JSONcomedian[intComedian].set.length;
  intComedianNoOfGigs = comedianCalcNoOfGigs(intComedian);
  /***************** CALC ********************/
  intExperience = intNoOfSets + intComedianNoOfGigs;
  /*******************************************/
  return intExperience;
} //function

function comedianCalcNoOfTimesUsedSet(intComedian, intSet) {
  let intNoOfTimesUsedSet = 0;
  for (let g in JSONgig) { //for every gig
    if ((JSONgig[g].comedian == intComedian) && (JSONgig[g].set == intSet)) { //current comedian played this gig TODO: why not find when ===?
      intNoOfTimesUsedSet += 1;
    } //if
  } //for
  return intNoOfTimesUsedSet;
} //function

function comedianCalcNoOfGigs(intComedian) {
  let intNoOfGigs = 0;
  for (let g in JSONgig) {
    if (JSONgig[g].comedian == intComedian) { //TODO: why not find when ===?
      intNoOfGigs += 1;
    } //if
  } //for
  return intNoOfGigs;
} //function
