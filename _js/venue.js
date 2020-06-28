
// START OF JSON //

var JSONvenue = [
  { //0
    "name"         : "Arts centre"
    ,"description" : "desc"
    ,"image"       : "image.png"
    ,"category"    : 0 //JSONvenueCategory ID
    ,"audience"    : []
  },{
    "name"         : "City hall"
    ,"description" : "desc"
    ,"image"       : "image.png"
    ,"category"    : 2 //JSONvenueCategory ID
    ,"audience"    : []
  },{
    "name"         : "Comedy chain club"
    ,"description" : "desc"
    ,"image"       : "image.png"
    ,"category"    : 1 //JSONvenueCategory ID
    ,"audience"    : []
  },{
    "name"         : "Independent comedy club"
    ,"description" : "desc"
    ,"image"       : "image.png"
    ,"category"    : 0 //JSONvenueCategory ID
    ,"audience"    : []
  },{
    "name"         : "Opening act for a band"
    ,"description" : "desc"
    ,"image"       : "image.png"
    ,"category"    : 1 //JSONvenueCategory ID
    ,"audience"    : []
  },{
    "name"         : "Pub function room"
    ,"description" : "desc"
    ,"image"       : "image.png"
    ,"category"    : 0 //JSONvenueCategory ID
    ,"audience"    : []
  },{
    "name"         : "Student union"
    ,"description" : "desc"
    ,"image"       : "image.png"
    ,"category"    : 2 //JSONvenueCategory ID
    ,"audience"    : []
  },{
    "name"         : "Working Men's Club"
    ,"description" : "desc"
    ,"image"       : "image.png"
    ,"category"    : 1 //JSONvenueCategory ID
    ,"audience"    : []
  },{
    "name"         : "New Stadium"
    ,"description" : "desc"
    ,"image"       : "image.png"
    ,"category"    : 3 //JSONvenueCategory ID
    ,"audience"    : []
  }
];

var JSONvenueCategory = [
  { //0
    "name"         : "Small Venue"
    ,"description" : "SmallVenueDesc"
    ,"capacity"    : 200
    ,"confidence"  : [{"min": 0, "max": 20}]
  },{ //1
    "name"         : "Medium Venue"
    ,"description" : "MediumVenueDesc"
    ,"capacity"    : 500
    ,"confidence"  : [{"min": 20, "max": 40}]
  },{ //2
    "name"         : "Large Venue"
    ,"description" : "LargeVenueDesc"
    ,"capacity"    : 1000
    ,"confidence"  : [{"min": 40, "max": 60}]
  },{ //3
    "name"         : "Stadium"
    ,"description" : "StadiumVenueDesc"
    ,"capacity"    : 10000
    ,"confidence"  : [{"min": 60, "max": 80}]
  },{ //4
    "name"         : "Festival"
    ,"description" : "FestivalVenueDesc"
    ,"capacity"    : 50000
    ,"confidence"  : [{"min": 80, "max": 100}]
  }
];

function venueCreateJSON() { //add additional common / non unique / random properties
  for (let v in JSONvenue) {
    JSONvenue[v].audience = venueCreateJSONaudience();
  } //for
} //function

function venueCreateJSONaudience() {
  //returns array of unique genres
  let arrTemp = [];
  let intAudience = 0;
  for (let i=0; i<=generateRandomNumber(JSONconfig[0].JSONaudiencePerVenueMin, JSONconfig[0].JSONaudiencePerVenueMax); i++) {
    do {
      intAudience = generateRandomNumber(0, JSONaudience.length-1); //-1 because index
    } while (inArray(arrTemp, intAudience));
    arrTemp.push(intAudience);
  } //for
  return arrTemp;
} //function

// END OF JSON //










function venueAudiencePossible(intVenue) {
  let strTemp = "";
  for (let a in JSONvenue[intVenue].audience) {
    if (a > 0) strTemp += "<br>";
    strTemp += JSONaudience[JSONvenue[intVenue].audience[a]].name;
    //TODO: clean up
    strTemp += "<br>";
    for (let g in JSONaudience[JSONvenue[intVenue].audience[a]].genre) {
      strTemp += " - ";
      strTemp += JSONgenre[JSONaudience[JSONvenue[intVenue].audience[a]].genre[g]].name;
      strTemp += "<br>";
    } //for
  } //for
  return strTemp;
} //function
