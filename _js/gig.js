
// START OF JSON //

var JSONgig = [];

var JSONgigCategory = [
  { //0
    "name"         : "Charity"
    ,"description" : "CharityGigDesc"
  },{ //1
    "name"         : "Corporate"
    ,"description" : "CorporateGigDesc"
  },{ //2
    "name"         : "Normal"
    ,"description" : "NormalGigDesc"
  },{ //3
    "name"         : "Warm Up"
    ,"description" : "WarmUpGigDesc"
  }
];

// END OF JSON //


function gig(intCategory) {
  gameTurnStart();
  let intComedian=0,intSet=0,intVenue=0,intAudience=0;
  intComedian = document.getElementById("selComedianGig").value;
  intSet = document.getElementById("selSet").value;
  intVenue = document.getElementById("selVenue").value;
  intAudience = audienceChoose(intVenue);
  gigCreate(intComedian, intSet, intVenue, intAudience, intCategory); //intCategory: 0=Charity,1=Corporate,2=Normal,3=Warm up
  gameTurnEnd();
} //function

function gigCreate(intComedian, intSet, intVenue, intAudience, intCategory) {
  let intHecklers=0,intAudienceRapport=0,intGigOutcome=0;
  // intHecklers = gigCalcHecklers(intComedian, intSet, intVenue, intAudience, intCategory);
  // intAudienceRapport = gigCalcaudienceRapport(intComedian, intSet, intVenue, intAudience, intCategory);
  // intGigOutcome = gigCalcGigOutcome(intComedian, intSet, intVenue, intAudience, intCategory);
  JSONgig.push({"comedian"         : intComedian
                ,"set"             : intSet
                ,"venue"           : intVenue
                ,"audience"        : intAudience
                ,"category"        : intCategory //intCategory: 0=Charity,1=Corporate,2=Normal,3=Warm up
                ,"turn"            : JSONconfig[0].turn
                // ,"hecklers"        : intHecklers
  }); //push
  updateStatsFromAction(intComedian, 0, intSet); //0=GIG 1=SET
  logIt("GIG", JSONcomedian[intComedian].name
    + " performed " + JSONset[JSONset.length-1].name  //-1 because index
    + " at " + JSONvenue[intVenue].name
    + " to " + JSONaudience[intAudience].name
    + " it was " + JSONgigCategory[intCategory].name
  ); //logIt
} //function


//////////////////////
//// CALCULATIONS ////
//////////////////////

function gigCalcHecklers(intComedian, intSet, intVenue, intAudience, intCategory) {
  let intHecklers=0,intStalness=0,intComedianTimesSetUsed=0,intComedianNoOfGigs=0,intChanceOfHecklers=0,intVenueConfidence=0,intSetQuality=0,intSetConfidence=0,intBonus=0;
  let boolHecklers = false;
  intComedianTimesSetUsed = comedianCalcNoOfTimesUsedSet(intComedian, intSet);
  intComedianNoOfGigs = comedianCalcNoOfGigs(intComedian);
  /***************** STALNESS ********************/
  intStalness = setCalcStalness(intSet);
  /***************** BONUSES ********************/
  if (inArray(JSONaudience[intAudience].genre, JSONset[intSet].genre)) {
    intBonus += JSONconfig[0].gigSameGenreBonus; //GENRE of SET is in AUDIENCE GENREs
    logIt("GIG", "GENRE of SET is in AUDIENCE GENREs");
  } //if
  /***************** SETUP CALC ********************/
  intSetConfidence = calcPercentage(intComedianTimesSetUsed, intComedianNoOfGigs); //TODO: calc better!
  intSetConfidence -= intStalness;
  intSetConfidence += intBonus;
  /***************** SET QUALITY ********************/
  intSetQuality = JSONset[intSet].quality;
  intSetQuality += (intSetQuality / JSONconfig[0].gigSetQualityOffset);
  switch (true) {
    case (intSetQuality < 0):
      intSetQuality = 0;
    break;
    case (intSetQuality > 100):
      intSetQuality = 100;
    break;
    default:
      // intSetQuality = 0;
  } //switch
  intSetConfidence += intSetQuality;
  /***************** VENUE CONFIDENCE ********************/
  //DO THIS AFTER CONFIDENCE IS CALCULATED
  if ((intSetConfidence >= JSONvenueCategory[JSONvenue[intVenue].category].confidence[0].min) && (intSetConfidence <= JSONvenueCategory[JSONvenue[intVenue].category].confidence[0].max)) {
    //within VENUEs confidence levels so COMEDIAN more confident
    intVenueConfidence = JSONconfig[0].gigVenueConfidenceBonus;
    logIt("GIG", "COMEDIAN has confidence in the SET to perform at the VENUE");
  } else {
    //NOT within VENUEs confidence levels so COMEDIAN intimidated
    intVenueConfidence = -JSONconfig[0].gigVenueConfidenceBonus; //make negative
    logIt("GIG", "COMEDIAN does not have confidence in the SET to perform at the VENUE");
  } //if
  intSetConfidence += intVenueConfidence;
  /***************** VALUE ERROR CHECKING ********************/
  switch (true) {
    case (intSetConfidence < 0):
      intSetConfidence = 0;
    break;
    case (intSetConfidence > 100):
      intSetConfidence = 100;
    break;
    default:
  } //switch
  /***************** CALC ********************/
  boolHecklers = chance.bool({ likelihood: intSetConfidence }); //x chance of TRUE //TODO: calc better!
  if (boolHecklers) intHecklers = generateRandomNumber(JSONconfig[0].gigHecklersMin, Math.round(JSONconfig[0].gigHecklersMax - (intSetConfidence / 10))); //get hecklers
  else {
    intHecklers = 0;
    logIt("GIG", "No HECKLERS at today's gig");
  } //if
  /*******************************************/
  if (intComedianNoOfGigs === 0) logIt("GIG", "Comedian's debut gig");
  if (intComedianTimesSetUsed === 0) logIt("GIG", "SET's performance debut");
  if (inArray(JSONaudience[intAudience].genre, JSONset[intSet].genre)) logIt("GIG", "GENRE of SET is in AUDIENCE GENREs");
  return intHecklers;
} //function

function gigCalcaudienceRapport(intComedian, intSet, intVenue, intAudience, intCategory) {
  let intAudienceRapport = 0;
  intAudienceRapport = 89; //TODO: calc
  return intAudienceRapport;
} //function

function gigCalcGigOutcome(intComedian, intSet, intVenue, intAudience, intCategory) {
  let intGigOutcome = 0;
  intGigOutcome = 99; //TODO: calc
  return intGigOutcome;
} //function


//////////////////////////
//// SUPPORTING LOGIC ////
//////////////////////////
