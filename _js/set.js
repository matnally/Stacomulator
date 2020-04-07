
// START OF JSON //

var JSONset = [];

function set() {
  gameTurnStart();
  setCreate(document.getElementById("selComedian").value,document.getElementById("selGenre").value,document.getElementById("inputSetName").value);
  gameTurnEnd();
} //function

function setCreate(intComedian, intGenre, strName) {
  let intSet = 0;
  JSONset.push({"name"         : strName
                ,"description" : "duuno" + JSONset.length
                ,"genre"       : intGenre
                ,"turn"        : JSONconfig[0].turn
                ,"quality"     : setCalcQuality(intComedian, intGenre) // %
  }); //push
  intSet = JSONset.length-1; //-1 as passing ID
  JSONcomedian[intComedian].set.push(intSet);
  comedianUpdate(intComedian, 1); //0=GIG 1=SET
  logIt("SET", JSONcomedian[intComedian].name + " wrote the set " + JSONset[intSet].name + " with " + JSONset[intSet].quality + "% quality");
} //function

// END OF JSON //



//////////////////////
//// CALCULATIONS ////
//////////////////////

function setCalcQuality(intComedian, intGenre) {
  let intQuality=0,intExperience=0;
  intExperience = comedianCalcExperience(intComedian);
  /***************** CALC ********************/
  intQuality = calcPercentage(intExperience, JSONconfig[0].turn); //TODO: calc better!
  if (JSONconfig[0].turn < 10) Math.round(intQuality = (intQuality/2)); //under 10 turns so offset it!
  /*******************************************/
  return intQuality;
} //function

function setCalcStalness(intSet) {
  let intStalness = 0;
  /***************** CALC ********************/
  intStalness = Math.round((JSONconfig[0].turn - JSONset[intSet].turn)/JSONconfig[0].setStalnessOffset); //how old the SET is!
  /*******************************************/
  return intStalness;
} //function
